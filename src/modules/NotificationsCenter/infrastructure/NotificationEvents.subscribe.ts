import { launchNotificacionsToast } from '@/app/_ui/AppNotification/components'
import { getAuthorization } from '@/common/utils'
import { SSE } from 'sse.js'

import { DTOtoNotificationEventAdapter } from '../application'
import { NotificationEvent, NotificationEventDTO } from '../domain'

export function subscribeNotificationEvents() {
	const MAX_RECONNECT_TRIES = 3
	let RECONNECT_ATTEPMS = 0
	const dateOfLastNotification = localStorage.getItem('dateOfLastNotificationEvent')

	const conection = new SSE(`https://api-foccus.up.railway.app/sse/event/${dateOfLastNotification || 0}`, {
		headers: { Authorization: getAuthorization() }
	})

	conection.onmessage = event => {
		const parsedData: Array<NotificationEventDTO> = JSON.parse(event.data)

		// if (parsedData[0].category === 'CLOSE') {
		// 	conection.close()
		// 	return
		// }

		if (parsedData.length) {
			const newNotifications: Array<NotificationEvent> = parsedData
				.filter(notification => notification.category !== 'CLOSE') // TODO: eliminar apenas el servidor implemente la no persistencia de category CLOSE
				.map(
					(notificationEvent: NotificationEventDTO): NotificationEvent =>
						DTOtoNotificationEventAdapter(notificationEvent)
				)
				.reverse()

			launchNotificacionsToast(newNotifications)

			let notificationsToSave: Array<NotificationEvent> = newNotifications

			const notificationsLocalStorage = localStorage.getItem('notificationscenter')

			if (notificationsLocalStorage) {
				const lastNotifications = JSON.parse(notificationsLocalStorage)
				notificationsToSave = [...newNotifications, ...lastNotifications]
			}

			localStorage.setItem('notificationscenter', JSON.stringify(notificationsToSave))
			localStorage.setItem('dateOfLastNotificationEvent', String(newNotifications[0].timestamp))
		}

		console.error('No hay nuevas notificaciones')
	}

	conection.onabort = () => {
		console.log('Conexion con el servidor cerrada')
	}

	conection.onerror = () => {
		if (RECONNECT_ATTEPMS > MAX_RECONNECT_TRIES) {
			conection.close()
			alert('We have a baaad network error!')
		} else {
			RECONNECT_ATTEPMS++
		}
	}

	// ! Para modo desarrollo
	setTimeout(() => conection.close(), 200000)
}
