'use client'

// TODO: Modularizar
import { APPROUTES } from '@/config/routes'
import { loginService } from '@/features/Session/infrastructure'
import { Credentials, credentialsDefaultValue } from '@/features/_shared/User'
import { Password } from '@components/_Forms/Password'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

import s from './login.module.scss'

export default function LoginForm() {
	const [credentials, setCredentials] = useState<Credentials>(credentialsDefaultValue)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	function changeCredentials(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()
		setError(false)
		setCredentials(prevCredentials => ({ ...prevCredentials, [e.target.name]: e.target.value }))
	}

	async function submitCredentials(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setLoading(true)
		await loginService(credentials)
			.then(() => router.push(APPROUTES.HOME))
			.catch(err => toast.error(err.message))
			.finally(() => setLoading(false))
	}

	return (
		<article className={s['form-container']}>
			<h2>Inicia Sesion en FOCCUS</h2>
			<form className={`${error ? s.error : undefined}`} onSubmit={submitCredentials}>
				<label>
					Ingrese su usuario
					<input
						id='username'
						type='text'
						name='username'
						autoFocus={true}
						placeholder='oliviaaroud123'
						autoComplete='username'
						onChange={changeCredentials}
					/>
				</label>
				<Password type='current-password' />
				<button type='submit'>{!loading ? 'Iniciar Sesion' : 'Cargando...'}</button>
			</form>
			<div className={s.actions}>
				<h3>
					<span className='decorator line' />
					ALGUN PROBLEMA?
					<span className='decorator line' />
				</h3>
				<div className={s['btn-actions']}>
					<button type='button'>Solicitar soporte</button>
					<button type='button'>Resetear contraseña</button>
				</div>
			</div>
		</article>
	)
}
