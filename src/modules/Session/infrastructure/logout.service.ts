import Http from '@/config/interceptors/axios.interceptor'
import { deleteUserInLocalStorage } from '@/modules/_shared/User/infrastructure'
import { getAuthorization } from '@common/utils'
import { ROUTES } from '@routes'

import { removeSessionCookie } from './removeSession.cookie'

export async function logoutService() {
	const session = getAuthorization()
	const res = await Http('/auth/logout', { headers: { Authorization: session } }).finally(() => {
		removeSessionCookie()
		deleteUserInLocalStorage()
		window.location.href = ROUTES.LOGIN
	})

	return res
}
