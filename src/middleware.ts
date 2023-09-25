import { sessionMiddleware } from '@middlewares'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	return sessionMiddleware(request)
}

export const config = {
	matcher: '/vision_general'
}
