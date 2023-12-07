'use client'

import { DTOtoNotificationEventAdapter } from '../application'
import { NotificationEvent, NotificationEventDTO } from '../domain'

export function onReceivingMessage(data: NotificationEventDTO[]) {
	data.reverse()

	let notificationsToSave: NotificationEvent[] = []

	const newNotifications = data.map(
		(notificationEvent): NotificationEvent => DTOtoNotificationEventAdapter(notificationEvent)
	)

	const notificationsLocalStorage = localStorage.getItem('notificationscenter')

	if (notificationsLocalStorage) {
		const lastNotifications = JSON.parse(notificationsLocalStorage)
		notificationsToSave = [...newNotifications, ...lastNotifications]
	}

	return { newNotifications, notificationsToSave }
}
