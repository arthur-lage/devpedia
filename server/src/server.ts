import Fastify from "fastify";

import { config } from "dotenv";

config();

import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { authRoutes } from "./routes/authRoutes";
import { userRoutes } from "./routes/userRoutes";
import { wordRoutes } from "./routes/wordRoutes";

async function bootstrap() {
  const PORT = process.env.PORT || 3001;

  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, { origin: true });

  await fastify.register(jwt, { secret: String(process.env.JWT_SECRET) });

  await fastify.register(authRoutes);
  await fastify.register(userRoutes);
  await fastify.register(wordRoutes);

  await fastify.listen({ port: Number(PORT) });
}

bootstrap();
