'use client'

import useSWR from 'swr'
import { Credentials } from '@/models'
import { redirect } from 'next/navigation'
import axios from 'axios'
import { z } from 'zod'

const urlLogin: string = 'https://foccus-back-dashboard-production.up.railway.app/auth/login'
const urlLogout: string = 'https://foccus-back-dashboard-production.up.railway.app/auth/logout'

const STATUS = {
	SUCCESS: 'exito',
	FAILED: 'fallo',
	ERROR: 'error'
}

const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g

const loginSchema = z.object({
	username: z.string().min(5),
	password: z.string().min(8).regex(regex)
})

interface Message {
	message: string
	status: string
}

export const login = async (credentials: Credentials): Message => {
	try {
		const isCredentialValid = loginSchema.safeParse(credentials).success
		if (isCredentialValid) {
			const { data: sesion } = await axios.post(urlLogin, credentials)
			// Almacenar la sesión en el almacenamiento local
			localStorage.setItem('sesion', JSON.stringify(sesion))

			return { message: sesion.userFound.name, status: STATUS.SUCCESS }
		}

		throw new Error('Usuario o contraseña inválido')
	} catch (err: any) {
		const { message } = err?.response?.data || err

		throw new Error(message)
	}
}

// TODO: Applied token logout
export const logout = async (): Message => {
	try {
		const { id } = JSON.parse(localStorage.getItem('sesion')).userFound
		const { data } = await axios.get(`${urlLogout}?id=${id}`)

		localStorage.removeItem('sesion')
		return { message: data, status: STATUS.SUCCESS }
	} catch (err) {
		throw new Error(err)
	}
}

// * FETCHER
const loginFetcher = async () => {
	const sesion: any = localStorage.getItem('sesion')
	if (sesion) {
		// authorized
		console.log('authorized')
		return sesion
	}

	// not authorized
	const error = new Error('Not authorized!')
	error.status = 403
	console.log('not authorized')
	redirect('/')
	throw error
}

export const useUser = () => {
	const { data, error, isLoading, mutate } = useSWR('sesion', loginFetcher, {
		revalidateIfStale: false,
		revalidateOnReconnect: false,
		revalidateOnMount: false
	})
	return {
		user: data,
		isLoading,
		error,
		mutate
	}
}
