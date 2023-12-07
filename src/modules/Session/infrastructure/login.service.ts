import Http from '@/config/interceptors/axios.interceptor'
import { APIROUTES } from '@/config/routes'
import { saveUserInLocalStorage } from '@/modules/_shared/User/infrastructure'
import { Credentials, credentialsIsValid } from '@shared/User'
import { userAdapter } from '@shared/User/application'

import { saveSessionInCookies } from '.'
import { sessionAdapter } from '../application'

export async function loginService(credentials: Credentials) {
	if (credentialsIsValid(credentials)) {
		// TODO: No usar interceptor
		const { data: sessionDTO } = await Http.post(APIROUTES.LOGIN, credentials)
		saveSessionInCookies(sessionAdapter(sessionDTO))
		saveUserInLocalStorage(userAdapter(sessionDTO))
		return
	}

	throw new Error('Usuario o contraseña inválido')
}
