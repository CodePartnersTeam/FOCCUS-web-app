'use client'

// TODO: Modularizar
import { APPROUTES } from '@/config/routes'
import { loginService } from '@/features/Session/infrastructure'
import { SessionDTO } from '@/features/_shared/Session/domain'
import { Credentials } from '@/features/_shared/User'
import { Password } from '@components/_Forms/Password'
import cn from 'classnames'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

import s from './login.module.scss'

export default function LoginForm() {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	async function submitCredentials(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		setLoading(true)
		setError(false)

		const { username, password } = e.target as HTMLFormElement

		const credentials: Credentials = { username: username.value, password: password.value }
		await loginService(credentials)
			.then((data: SessionDTO) => {
				router.push(APPROUTES.HOME)
				toast.success(`Bienvenido de nuevo! ${data.userFound.name}`)
			})
			.catch(err => {
				setError(true)
				toast.error(err.message)
			})
			.finally(() => setLoading(false))
	}

	return (
		<article className={s['form-container']}>
			<h2>Inicia Sesion en FOCCUS</h2>
			<form className={cn(error && s.error)} onSubmit={submitCredentials}>
				<label>
					Ingrese su usuario
					<input
						id='username'
						type='text'
						name='username'
						autoFocus={true}
						placeholder='oliviaaroud123'
						autoComplete='username'
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
