import { NotificationEvent } from '../domain'

const KEY = 'notificationscenter'

export function saveNotificationEventsToLS(notificationsToSave: NotificationEvent[]) {
	localStorage.setItem(KEY, JSON.stringify(notificationsToSave))
}

export function getNotificationEventsFromLS(): NotificationEvent[] {
	const localStorageNotifications = localStorage.getItem(KEY)

	if (localStorageNotifications) {
		const notifications = JSON.parse(localStorageNotifications)
		return notifications
	}

	console.error('No hay notificaciones guardadas en Local Storage')
	return []
}

export function deleteNotificationByTicket(numberOfTicket: string) {
	const notificationEvents: NotificationEvent[] = getNotificationEventsFromLS()

	const filteredNotifications = notificationEvents.filter(
		(notification: NotificationEvent) => notification.ticket !== numberOfTicket
	)

	saveNotificationEventsToLS(filteredNotifications)
}
