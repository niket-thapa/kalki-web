import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the Authorization header
  const authHeader = request.headers.get('authorization');

  // Expected credentials
  const username = 'kalki';
  const password = 'Kalki2898';
  const validCredentials = Buffer.from(`${username}:${password}`).toString('base64');
  const expectedAuth = `Basic ${validCredentials}`;

  // Check if user is authenticated
  if (!authHeader || authHeader !== expectedAuth) {
    // Return 401 with WWW-Authenticate header to trigger browser auth dialog
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Kalki Website"',
      },
    });
  }

  // User is authenticated, allow request to proceed
  return NextResponse.next();
}

// Configure which routes should be protected
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};

