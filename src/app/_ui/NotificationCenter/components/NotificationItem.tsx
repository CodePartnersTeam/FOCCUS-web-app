import * as Dropdown from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import { Icon } from '../../Icon'
import { Ticket, type TicketValue } from '../../Ticket'

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
		const mes = fecha.toLocaleString('es-co', { month: 'short' })
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
				{
					// TODO:  implemetar Componente de Ellipses
				}
				<Dropdown.Root>
					<Dropdown.Trigger className={styles.ellipses}>
						<Icon url='/icons/options.svg' alt='Options' />
					</Dropdown.Trigger>
					<Dropdown.Content className={styles.dropdown} sideOffset={0}>
						<Dropdown.Item asChild>
							<button type='button'>Visto</button>
						</Dropdown.Item>
					</Dropdown.Content>
				</Dropdown.Root>
				<Ticket name='ticket' value={numberOfTicket} />
			</section>
		</article>
	)
}
