import { deleteNotificationEventByTicketService } from '@/modules/NotificationsCenter/infrastructure'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Icon } from '@ui/Icon'
import { Ticket, type TicketValue } from '@ui/Ticket'
import { toast } from 'sonner'

import { useNotificationsCenterStore } from '../useNotificationsCenter.store'

import styles from './NotificationItem.module.scss'

interface NotificationItemProps {
	timestamp: Date | string
	title: string
	description: string
	numberOfTicket: TicketValue
}

export function NotificationItem({ timestamp, title, description, numberOfTicket }: NotificationItemProps) {
	const { updateNotificationEvents } = useNotificationsCenterStore()

	// TODO: Elimar al implementar TimeStamp
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
		<article className={styles['notification-center-item']}>
			<section className={styles.info}>
				<span className={styles.timestamp}>{formatearFecha(timestamp)}</span>
				<h4 className={`${styles.title}`}>{title}</h4>
				<p className={`${styles.description}`}>{description}</p>
			</section>
			<section className={styles.actions}>
				{
					// TODO:  implemetar Componente de Ellipses
				}
				<Dropdown.Root>
					<Dropdown.Trigger className={styles.ellipses}>
						<Icon url='/icons/options.svg' alt='Options' />
					</Dropdown.Trigger>
					<Dropdown.Content className={styles.dropdown} sideOffset={0}>
						<Dropdown.Item asChild>
							<button
								type='button'
								onClick={() =>
									deleteNotificationEventByTicketService(numberOfTicket)
										.then(() => {
											updateNotificationEvents()
											toast.success('Notificacion marcada como visto')
										})
										.catch(reason => toast.error(reason))
								}
							>
								Visto
							</button>
						</Dropdown.Item>
					</Dropdown.Content>
				</Dropdown.Root>
				<Ticket name='ticket' value={numberOfTicket} />
			</section>
		</article>
	)
}
