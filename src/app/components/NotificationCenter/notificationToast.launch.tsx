'use client'

import { emitSound } from '@/common/utils'
import { NotificationEvent } from '@/features/NotificationsCenter/domain'
import { toast } from 'sonner'

import { Icon } from '../Icon'
import { NotificationToast } from './components/Notification.Toast'

export async function launchNotificacionsToast(notifications: Array<NotificationEvent>) {
	const numberOfNotifications = notifications.length
	emitSound('audios/message-pop.mp3')

	notifications.map(({ category, data }) =>
		toast(<NotificationToast title={category} description={data.message} />, {
			duration: 5000,
			position: 'bottom-right'
		})
	)

	if (numberOfNotifications > 3) {
		toast.info(`${numberOfNotifications} notificaiones nuevas`, {
			icon: <Icon url='/icons/bell.svg' alt='campana' classNames='bell' />,
			duration: 7500,
			position: 'bottom-right'
		})
	}
}
