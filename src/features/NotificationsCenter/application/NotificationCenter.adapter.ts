import { NotificationEvent, NotificationEventDTO } from '../domain'

export function DTOtoNotificationEventAdapter(notificationEventDTO: NotificationEventDTO): NotificationEvent {
	return {
		ticket: notificationEventDTO._id,
		timestamp: notificationEventDTO.createdAt,
		category: notificationEventDTO.category,
		// TODO: Usar plantilla correspondiente
		title: notificationEventDTO.category,
		description: notificationEventDTO.response.message,
		seen: notificationEventDTO.seen,
		data: notificationEventDTO.response
	}
}
