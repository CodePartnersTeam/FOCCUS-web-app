import Image from 'next/image'
import LogoFoccus from 'public/images/logos/LogoFoccus.png'
import style from './page.module.scss'
import LoginForm from './loginForm'

export default function LoginPage() {
	return (
		<main id={style['login-page']}>
			<section className={style.banner}>
				<blockquote>“Observa el mundo con ojos nuevos, enfocate en lo que realmente importa.”</blockquote>
			</section>
			<section className={style.right}>
				<Image alt='Logo Foccus' src={LogoFoccus} />
				<LoginForm />
			</section>
		</main>
	)
}
