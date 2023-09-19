'use client'
import { Credentials, credentialsDefaultValue } from '@/models'
import { useRouter } from 'next/navigation'
import { login } from '@/services/Login'
import React, { useState } from 'react'
import style from './page.module.scss'
import { toast } from 'sonner'

export default function LoginForm() {
	const router = useRouter()

	const [credentials, setCredentials] = useState<Credentials>(credentialsDefaultValue)

	const [error, setError] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const { message } = await login(credentials)
			toast.success(`Bienvenido ${message}`)
			router.push('/vision general')
		} catch (err: any) {
			toast.error(err.message)
			setError(true)
		}
	}

	return (
		<article className={style['form-container']}>
			<h2>Inicia Sesion en FOCCUS</h2>
			<form onSubmit={handleSubmit} className={`${error ? style.error : undefined}`}>
				<label>
					Ingrese su usuario
					<input type='text' name='username' placeholder='oliviaaroud123' autoFocus={true} onChange={handleChange} />
				</label>
				<label>
					Ingrese su contraseña
					<input type='password' name='password' placeholder='*******' onChange={handleChange} />
				</label>
				<input type='submit' value='Iniciar Sesion' />
			</form>
			<div className={style.actions}>
				<h3>
					<span className='decorator line' />
					ALGUN PROBLEMA?
					<span className='decorator line' />
				</h3>
				<div className={style['btn-actions']}>
					<button type='button'>Solicitar soporte</button>
					<button type='button'>Resetear contraseña</button>
				</div>
			</div>
		</article>
	)
}
