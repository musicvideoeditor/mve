import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    createdAt?: string;
    accessToken: string;
  }

  interface Session {
    user: {
      id?: number;
      name?: string;
      username?: string;
      email?: string;
      createdAt?: string;
    };
    accessToken: string;
  }

  interface JWT {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    createdAt?: string;
    accessToken: string;
  }
}
