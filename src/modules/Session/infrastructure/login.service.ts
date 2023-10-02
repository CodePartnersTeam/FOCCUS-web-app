import Http from '@/config/interceptors/axios.interceptor'
import { Credentials, credentialsIsValid } from '@shared/User'
import { userAdapter } from '@shared/User/application'
import { saveUserInLocalStorage } from '@shared/User/infraestructure'

import { saveSessionInCookies } from '.'
import { sessionAdapter } from '../application'

export async function loginService(credentials: Credentials) {
	if (credentialsIsValid(credentials)) {
		const { data: sessionDTO } = await Http.post('/auth/login', credentials)
		saveSessionInCookies(sessionAdapter(sessionDTO))
		saveUserInLocalStorage(userAdapter(sessionDTO))
		return
	}

	throw new Error('Usuario o contraseña inválido')
}
