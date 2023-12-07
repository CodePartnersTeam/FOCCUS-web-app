import { Session } from '@/features/_shared/Session/domain'
import Cookies from 'js-cookie'

export function saveSessionInCookies(session: Session) {
	Cookies.set('session', session)
}
