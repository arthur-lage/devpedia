import { FastifyInstance } from "fastify";

import { z } from "zod";
import axios from "axios";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.get("/me", { onRequest: [authenticate] }, async (req, reply) => {
    return reply.status(200).send({ user: req.user });
  });

  fastify.post("/users", async (req, reply) => {
    try {
      const createUserBody = z.object({
        code: z.string(),
      });

      const { code } = createUserBody.parse(req.body);

      const userResponse = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${
          process.env.GITHUB_OAUTH_CLIENT_ID
        }&client_secret=${
          process.env.GITHUB_OAUTH_CLIENT_SECRET
        }&code=${code}&redirect_uri=${"http://localhost:3000"}`,
        {},
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const { access_token } = userResponse.data;

      const userDataResponse = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const userDataBody = z.object({
        id: z.string(),
        avatar_url: z.string(),
        name: z.string(),
        login: z.string(),
        email: z.string().nullable(),
        url: z.string(),
      });

      const userDataInfo = userDataBody.parse({
        id: String(userDataResponse.data.id),
        avatar_url: userDataResponse.data.avatar_url,
        name: userDataResponse.data.name,
        login: userDataResponse.data.login,
        email: userDataResponse.data.email,
        url: userDataResponse.data.url,
      });

      let user = await prisma.user.findUnique({
        where: {
          githubId: userDataInfo.id,
        },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            name: userDataInfo.name,
            email: userDataInfo.email,
            profilePicture: userDataInfo.avatar_url,
            url: userDataInfo.url,
            githubId: userDataInfo.id,
            githubUsername: userDataInfo.login,
          },
        });
      }

      if (user.email != userDataInfo.email) {
        await prisma.user.update({
          where: { githubId: userDataInfo.id },
          data: {
            email: userDataInfo.email,
          },
        });
      }

      const token = fastify.jwt.sign(
        {
          name: user.name,
          profilePicture: user.profilePicture,
          url: user.url,
          githubUsername: user.githubUsername,
        },
        { sub: user.id, expiresIn: "7d" }
      );

      reply.status(201).send({ token });
    } catch (err: any) {
      return reply.status(400).send({ error: err.message });
    }
  });
}
