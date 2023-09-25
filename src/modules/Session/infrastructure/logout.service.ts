import Http from '@/config/interceptors/axios.interceptor'

import removeSessionCookie from './removeSession.cookie'

export async function logoutService() {
	const res = await Http('/auth/logout')
	console.log(res)
	removeSessionCookie()
	return res
}
