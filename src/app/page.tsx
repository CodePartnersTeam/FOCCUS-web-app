import Image from 'next/image'
import LogoFoccus from 'public/logos/LogoFoccus.png'
import style from './page.module.scss'

export default function LoginPage() {
	return (
		<main id={style.loginPage}>
			<section className={style.banner}>
				<blockquote>“Observa el mundo con ojos nuevos, enfocate en lo que realmente importa.”</blockquote>
			</section>
			<section className={style.right}>
				<Image alt="Logo Foccus" src={LogoFoccus} />
				<article className={style['form-container']}>
					<h2>Inicia Sesion en FOCCUS</h2>
					<form>
						<label>
							Ingrese su usuario
							<input type="text" placeholder="oliviaaroud123" autoFocus={true} />
						</label>
						<label>
							Ingrese su contraseña
							<input type="password" placeholder="*******" />
						</label>
						<input type="submit" value="Iniciar Sesion" />
					</form>
					<div className={style.actions}>
						<h3>
							<span className="decorator line" />
							ALGUN PROBLEMA?
							<span className="decorator line" />
						</h3>
						<button type="button">Solicitar soporte</button>
						<button type="button">Resetear contraseña</button>
					</div>
				</article>
			</section>
		</main>
	)
}
