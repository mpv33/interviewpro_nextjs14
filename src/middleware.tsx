// src/middleware.ts
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the user is accessing the /dashboard route
  if (pathname === '/dashboard') {
    // Redirect to /tasks
    return NextResponse.redirect(new URL('/tasks', request.url));
  }

  // Continue to the next middleware or request handler for other routes
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/dashboard'], // Match only the /dashboard route
};
