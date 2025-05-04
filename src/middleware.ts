import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   //  get cookies
  //   let cookie = request.cookies.get("cookie-name");
  //   console.log(cookie);

  const user = {
    email: "example@gmail.com",
    role: "admin",
  };

  const isAdmin = user?.role == "admin";
  const isAboutPage = request.nextUrl.pathname.startsWith("/about");

  if (isAboutPage && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
