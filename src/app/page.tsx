import Image from 'next/image'

import LoginForm from './loginForm'

import style from './login.module.scss'

export default function LoginPage() {
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
