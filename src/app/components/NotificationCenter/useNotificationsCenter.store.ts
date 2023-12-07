import { NotificationEvent } from '@/features/NotificationsCenter/domain'
import { getNotificationEventsFromLS } from '@/features/NotificationsCenter/infrastructure'
import { create } from 'zustand'

type NotificationsCenterStore = {
	countOfNotifications: number
	notificationEvents: Array<NotificationEvent>
	first5Notifications: Array<NotificationEvent>
	updateNotificationEvents: () => void
}

export const useNotificationsCenterStore = create<NotificationsCenterStore>(set => ({
	countOfNotifications: 0,
	notificationEvents: [],
	first5Notifications: [],
	updateNotificationEvents: () =>
		set(() => {
			const notificationEvents = getNotificationEventsFromLS()

			return {
				countOfNotifications: notificationEvents?.length,
				first5Notifications: notificationEvents?.slice(0, 5),
				notificationEvents
			}
		})
}))
