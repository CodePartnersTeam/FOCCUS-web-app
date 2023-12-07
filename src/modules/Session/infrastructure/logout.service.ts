import Http from '@/config/interceptors/axios.interceptor'
import { deleteUserInLocalStorage } from '@/modules/_shared/User/infrastructure'
import { getAuthorization } from '@common/utils'
import { APIROUTES, APPROUTES } from '@routes'

import { removeSessionCookie } from './removeSession.cookie'

export async function logoutService() {
	const res = await Http(APIROUTES.LOGOUT, { headers: { Authorization: getAuthorization() } }).finally(() => {
		removeSessionCookie()
		deleteUserInLocalStorage()
		window.location.href = APPROUTES.LOGIN
	})

	return res
}
