import { FastifyInstance } from "fastify";

export async function wordRoutes(fastify: FastifyInstance) {
  fastify.get("/words", (req, reply) => {
    const words: any = [];

    reply.status(200).send({ words });
  });
}
