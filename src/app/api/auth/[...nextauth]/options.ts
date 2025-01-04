import { API } from "@/lib/api";
import { apiBaseURL } from "@/lib/constants";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const authRes = await API.AUTH.login({
            data: {
              identifier: credentials?.email,
              password: credentials?.password,
            },
          });
          const { jwt } = authRes.data;

          

          const userRes = await axios.get(`${apiBaseURL}/api/users/me`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
          
          const user = userRes.data;

          if (user && jwt) {
            return {
              id: user.documentId,
              name: user.name,
              accessToken: jwt,
              email: user.email,
              username: user.username,
              createdAt: user.createdAt,
            };
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error: any) {
          console.log("********", error?.response?.data);
          throw new Error(error?.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
    newUser: "/auth/signup",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.username = user.username;
        token.email = user.email;
        token.createdAt = user.createdAt;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        console.log(token)
        session.user.id = token.id as number;
        session.accessToken = token.accessToken as string;
        session.user.name = token.name as string;
        session.user.username = token.username as string;
        session.user.email = token.email as string;
        session.user.createdAt = token.createdAt as string;
      }
      return session;
    },
  },
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
  },
};
