import Cookies from 'js-cookie'

export function getAuthorization() {
	const Token = Cookies.get('session')

	if (Token !== undefined) {
		const sessionToken = JSON.parse(Token)
		console.log(sessionToken)

		return `Bearer ${sessionToken}`
	}
	throw new Error('No existe una sesión generada')
}
