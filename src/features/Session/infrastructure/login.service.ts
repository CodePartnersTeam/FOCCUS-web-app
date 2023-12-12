import { APIROUTES } from '@/config/routes'
import { Credentials, credentialsIsValid } from '@/features/_shared/User'
import { userAdapter } from '@/features/_shared/User/application'
import { saveUserInLocalStorage } from '@/features/_shared/User/infrastructure'
import axios from 'axios'

import { saveSessionInCookies } from '.'
import { sessionAdapter } from '../application'

export async function loginService(credentials: Credentials) {
	if (!credentialsIsValid(credentials)) {
		throw new Error('Usuario o contraseña inválido')
	}

	try {
		const { data: sessionDTO } = await axios.post(APIROUTES.LOGIN, credentials)
		saveSessionInCookies(sessionAdapter(sessionDTO))
		saveUserInLocalStorage(userAdapter(sessionDTO))
		return sessionDTO
	} catch (error: any) {
		console.log(error)

		throw new Error(error.response.data.message)
	}
}
