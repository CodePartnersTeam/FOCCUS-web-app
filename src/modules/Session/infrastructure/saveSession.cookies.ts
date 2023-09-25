import Cookies from 'js-cookie'

import { Session } from '../domain'

export function saveSessionCookies(session: Session) {
	Cookies.set('sesion', JSON.stringify(session))
}
