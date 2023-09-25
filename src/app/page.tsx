import { ROUTES } from '@routes'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import LoginForm from './loginForm'

import style from './login.module.scss'

export default function LoginPage() {
	// Obtenemos la sesion de las cookies de los headers
	const session = cookies().get('sesion')?.value

	if (session !== undefined) {
		/**
		 * const { token } = JSON.parse(session)
		 * TODO: Comprobar si el token es valido antes de redirigir, en caso que no. Eliminar sesion.
		 */
		return redirect(ROUTES.LANDING)
	}

	return (
		<main id={style['login-page']}>
			<section className={style.banner}>
				<blockquote>“Observa el mundo con ojos nuevos, enfocate en lo que realmente importa.”</blockquote>
			</section>
			<section className={style.right}>
				<Image width={128} height={30} src='/images/logos/LogoFoccus.png' alt='Logo Foccus' />
				<LoginForm />
			</section>
		</main>
	)
}
