// /src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET as string;
  // @ts-ignore
  const token = await getToken({ req: request, secret: secret });
  const { pathname } = request.nextUrl;


  if (token?.username) {
    // Redirect logged-in users trying to access auth pages
    if (pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (!token?.username) {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"], // Apply middleware to all auth routes
};
