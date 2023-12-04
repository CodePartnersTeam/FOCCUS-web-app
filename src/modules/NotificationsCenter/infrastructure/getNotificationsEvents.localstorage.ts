export function getNotificationsEventsFromLocalStorage() {
	const localStorageNotifications = localStorage.getItem('notificationscenter')

	if (localStorageNotifications) {
		const parsedNotifications = JSON.parse(localStorageNotifications)
		return parsedNotifications
	}

	console.error('No hay notificaciones guardadas en Local Storage')
}
