import { Content, Group as GroupActions, Root, Separator, Label as Title, Trigger } from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import { Ticket, type TicketValue } from '../Ticket'

import styles from './NotificationItem.module.scss'

interface NotificationItemProps {
	timestamp: Date | string
	title: string
	description: string
	numberOfTicket: TicketValue
	disabled?: boolean
}

export function NotificationItem({ timestamp, title, description, numberOfTicket, disabled }: NotificationItemProps) {
	function formatearFecha(timestamp: Date | string) {
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
		<article className={cn(styles['card-container'], disabled && styles.seen)}>
			<section className={styles['left-side']}>
				<span className={`${styles.timestamp}`}>{formatearFecha(timestamp)}</span>
				<h4 className={`${styles.title}`}>{title}</h4>
				<p className={`${styles.description}`}>{description}</p>
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
				<Ticket name='ref' value={numberOfTicket} />
			</section>
		</article>
	)
}
