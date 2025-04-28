import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // CORS 헤더 설정
  response.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");

  return response;
}

// CORS가 적용되어야 하는 경로 설정
export const config = {
  matcher: "/api/:path*",
};
