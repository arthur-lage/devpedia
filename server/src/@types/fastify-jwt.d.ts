import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      sub: string;
      name: string;
      profilePicture: string;
      githubUsername: string;
      url: string;
    };
  }
}
