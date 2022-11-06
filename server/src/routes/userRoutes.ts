import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users", async (req, reply) => {
    const users = await prisma.user.findMany();

    reply.status(200).send({ users });
  });
}
