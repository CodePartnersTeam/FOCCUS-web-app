import { ROUTES } from '@routes'
import { NextRequest, NextResponse } from 'next/server'

export async function sessionMiddleware(request: NextRequest) {
	// TODO: Aplicar endpoint para validar token
	try {
		const session: any = request.cookies.get('sesion')
		const { token } = JSON.parse(session?.value)

		if (!token) {
			return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url))
		}

		return NextResponse.next()
	} catch (error) {
		return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url))
	}
}