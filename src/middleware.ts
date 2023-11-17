import { API, ROUTES } from '@routes'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	try {
		const session = request.cookies.get('session')
		if (session) {
			if (pathname === ROUTES.LOGIN) return NextResponse.redirect(new URL(ROUTES.LANDING, request.url))
			const { value: token } = session

			await fetch(`${API}/auth/validate/session`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(({ status }) => {
				if (status !== 200) throw new Error('Sesion no encontrada en la DB')
			})

			return NextResponse.next()
		}

		throw new Error('Sesion no encontrada en el Navegador')
	} catch (reason: any) {
		console.log('❗', 'middleware:', reason.message, '\n', pathname)
		if (pathname === ROUTES.LOGIN) return NextResponse.next()

		const NewNextResponse: any = NextResponse

		const response = new NewNextResponse(new Blob(), {
			cookies: request.cookies,
			status: 307,
			headers: { location: String(new URL(ROUTES.LOGIN, request.url)) }
		})
		response.cookies.delete('session')
		return response
	}
}

export const config = {
	/*
	 * Coincide con todas las rutas de petición excepto las que empiezan por:
	 * - api (rutas API)
	 * _next/static (archivos estáticos)
	 * _next/image (archivos de optimización de imágenes)
	 * favicon.ico (archivo favicon)
	 * Se excluyen todos los archivos ubicados en public
	 */
	matcher: ['/', '/((?!api|_next/static|_next/image|images|icons|fonts|videos|favicon.ico).*)']
}
