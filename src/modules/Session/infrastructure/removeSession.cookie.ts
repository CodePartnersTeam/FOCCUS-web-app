import Cookies from 'js-cookie'

export function removeSessionCookie() {
	Cookies.remove('session')
}
