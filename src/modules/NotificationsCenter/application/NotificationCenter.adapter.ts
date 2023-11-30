import { NotificationEvent, NotificationEventDTO } from '../domain'

export function DTOtoNotificationEventAdapter(notificationEventDTO: NotificationEventDTO): NotificationEvent {
	return {
		ticket: notificationEventDTO._id,
		timestamp: notificationEventDTO.createdAt,
		category: notificationEventDTO.category,
		seen: notificationEventDTO.seen,
		data: notificationEventDTO.response
	}
}
