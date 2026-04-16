import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getLegacyThreadPath, getThreadPath, threads } from "./app/threads/threadData";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const matchedThread = threads.find(
    (thread) => getLegacyThreadPath(thread).toLowerCase() === pathname.toLowerCase()
  );

  if (!matchedThread) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(getThreadPath(matchedThread), request.url), 308);
}

export const config = {
  matcher: ["/threads/:path*"],
};