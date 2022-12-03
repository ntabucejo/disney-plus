import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {
  const token = request.nextauth.token;
  const pathname = request.nextUrl.pathname;
  // Redirect to "/" login page when user is logged in
  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export default withAuth(middleware, {
  callbacks: { authorized: () => true },
});

export const config = {
  matcher: [
    "/movies/:path*",
    "/series/:path*",
    "/originals/:path*",
    "/search/:path*",
    "/profile/:path*",
  ],
};
