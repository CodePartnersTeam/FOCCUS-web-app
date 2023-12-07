interface ResponseNotificationEvent {
	message: string
}

export interface NotificationEventDTO {
	_id: string
	userId: string
	category: string
	response: ResponseNotificationEvent
	location: string
	delivered: boolean
	seen: boolean
	createdAt: Date
}

export interface NotificationEvent {
	ticket: string
	category: string
	title: string
	description: string
	seen: boolean
	timestamp: Date
	data: ResponseNotificationEvent
}
