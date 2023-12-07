import Cookies from 'js-cookie'

export function getAuthorization() {
	const Token = Cookies.get('session')

	if (Token !== undefined) {
		return `Bearer ${Token}`
	}

	throw new Error('No existe una sesión generada')
}
