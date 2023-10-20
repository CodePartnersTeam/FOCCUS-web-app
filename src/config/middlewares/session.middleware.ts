import { API, ROUTES } from '@routes'
import { NextRequest, NextResponse } from 'next/server'

export async function sessionMiddleware(request: NextRequest) {
	try {
		const session: any = request.cookies.get('session')
		const token = JSON.parse(session?.value)
		const { status } = await fetch(`${API}/auth/validate/session`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!token || status !== 200) {
			const NewNextResponse: any = NextResponse
			const newHeaders = {
				location: new URL(ROUTES.LOGIN, request.url).toString()
			}
			const response = new NewNextResponse(new Blob(), {
				cookies: request.cookies,
				status: 307,
				headers: newHeaders
			})
			response.cookies.delete('session')
			return response
		}

		return NextResponse.next()
	} catch (error) {
		return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url))
	}
}
