import { APIROUTES } from '@/config/routes'
import { Credentials, credentialsIsValid } from '@/features/_shared/User'
import { userAdapter } from '@/features/_shared/User/application'
import { saveUserInLocalStorage } from '@/features/_shared/User/infrastructure'
import axios from 'axios'
import { toast } from 'sonner'

import { saveSessionInCookies } from '.'
import { sessionAdapter } from '../application'

export async function loginService(credentials: Credentials) {
	if (credentialsIsValid(credentials)) {
		const { data: sessionDTO } = await axios.post(APIROUTES.LOGIN, credentials)
		saveSessionInCookies(sessionAdapter(sessionDTO))
		saveUserInLocalStorage(userAdapter(sessionDTO))
		toast.success(JSON.stringify(`'Bienvenido' ${credentials.username}`))
		return
	}

	throw new Error('Usuario o contraseña inválido')
}
