import { Session } from '@shared/Session/domain'
import Cookies from 'js-cookie'

export function saveSessionInCookies(session: Session) {
	Cookies.set('session', session)
}
