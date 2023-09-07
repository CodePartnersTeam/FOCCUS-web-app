'use client'
import React, { useState } from 'react'
import style from './page.module.scss'
import { Credentials } from '@/models'

export default function LoginForm() {
	const [loginData, setLoginData] = useState<Credentials>({
		username: '',
		password: ''
	})

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }))
		console.log(loginData)
	}

	return (
		<article className={style['form-container']}>
			<h2>Inicia Sesion en FOCCUS</h2>
			<form>
				<label>
					Ingrese su usuario
					<input type='text' name='username' placeholder='oliviaaroud123' autoFocus={true} onChange={handlerChange} />
				</label>
				<label>
					Ingrese su contraseña
					<input type='password' name='password' placeholder='******* ' onChange={handlerChange} />
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
