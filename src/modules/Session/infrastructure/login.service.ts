import Http from '@/config/interceptors/axios.interceptor'
import { Credentials, credentialsIsValid } from '@modules/User'

import { saveSessionCookies } from '.'
import { sessionAdapter } from '../application'

export async function loginService(credentials: Credentials) {
	if (credentialsIsValid(credentials)) {
		const session = await Http.post('/auth/login', credentials).then(({ data }) => sessionAdapter(data))
		saveSessionCookies(session)
		return
	}

	throw new Error('Usuario o contraseña inválido')
}
