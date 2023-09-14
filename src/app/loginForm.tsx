'use client'
import React, { useState, useEffect } from 'react'
import style from './page.module.scss'
import { Credentials, credentialsDefaultValue } from '@/models'
import { z } from 'zod'
import { toast } from 'sonner'

const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g

const loginSchema = z.object({
	username: z.string().min(5),
	password: z.string().min(8).regex(regex)
})

export default function LoginForm() {
	const [loginData, setLoginData] = useState<Credentials>(credentialsDefaultValue)

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	useEffect(() => console.log(loginData), [loginData]) // Delete

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const result = loginSchema.safeParse(loginData)

		if (!result.success) {
			toast.error('Usuario o Contraseña incorrecto')
			// return
		}

		// TODO: Apllied endpoint Login
	}

	return (
		<article className={style['form-container']}>
			<h2>Inicia Sesion en FOCCUS</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Ingrese su usuario
					<input type='text' name='username' placeholder='oliviaaroud123' autoFocus={true} onChange={handlerChange} />
				</label>
				<label>
					Ingrese su contraseña
					<input type='password' name='password' placeholder='*******' onChange={handlerChange} />
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
			{/* <div>{error ? 'failed to load' : data}</div> */}
		</article>
	)
}

// const fetcher = async (url: string, data: {
// 	"username": "LuisCarlos",
// 	"password": "iaASA123#"
// }) => {
// 	const response = await fetch(url, {
// 		method: 'POST',
// 		body: JSON.stringify(data),
// 		headers: {
// 			"content-type": "application/json"
// 		}
// 	}

// 	)

// 	if (!response.ok) {
// 		throw new Error('Error al iniciar sesión');
// 	}

// 	const responseData = await response.json();
// 	console.log(responseData)
// 	return responseData

// }
