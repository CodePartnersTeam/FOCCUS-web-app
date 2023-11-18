import { Content, Group as GroupActions, Root, Separator, Label as Title, Trigger } from '@radix-ui/react-dropdown-menu'

import styles from './NotificationItem.module.scss'

interface NotificationDTO {
	timestamp: string
	title: string
	description: string
	ticket: string
	seen: boolean | string
}

export function NotificationItem({ timestamp, title, description, ticket, seen }: NotificationDTO) {
	function formatearFecha(timestamp: string) {
		const fecha = new Date(timestamp)
		const mes = fecha.toLocaleString('en-us', { month: 'short' })
		const dia = fecha.getDate()
		const hora = fecha.getHours()
		const minutos = fecha.getMinutes()
		const periodo = hora >= 12 ? 'p.m.' : 'a.m.'
		const horaFormateada = hora > 12 ? hora - 12 : hora
		return `${mes} ${dia}, ${horaFormateada}:${minutos < 10 ? '0' : ''}${minutos} ${periodo}`
	}

	return (
		<article className={styles['card-container']}>
			<section className={styles['left-side']}>
				<span className={`${styles.timestamp} ${seen === true ? styles.seen : ''}`}>{formatearFecha(timestamp)}</span>
				<h4 className={`${styles.title} ${seen === true ? styles.seen : ''}`}>{title}</h4>
				<p className={`${styles.description} ${seen === true ? styles.seen : ''}`}>{description}</p>
			</section>
			<section className={styles['right-side']}>
				{/* TODO:  implemetar Componente de Ellipses */}
				<Root>
					<Trigger className={styles.ellipses}>
						<img src='/icons/options.svg' alt='Options' />
					</Trigger>
					<Content className={styles.dropdown} sideOffset={0}>
						<Title className={styles.username}>{'{Opciones}'}</Title>
						<Separator />
						<GroupActions>{'Opciones'}</GroupActions>
					</Content>
				</Root>
				<p className={`${styles.ticket} ${seen === true ? styles.seen : ''}`}>Ticket: {ticket}</p>
			</section>
		</article>
	)
}
