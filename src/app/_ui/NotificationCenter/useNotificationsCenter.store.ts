import { create } from 'zustand'

import { NotificationEvent } from '../../../modules/NotificationsCenter/domain'

type NotificationsCenterStore = {
	countOfNotifications: number
	listOfNotifications: Array<NotificationEvent>
	first5Notifications: Array<NotificationEvent>
	setNotificationsCenter: (newNotifications: Array<NotificationEvent>) => void
}

export const useNotificationsCenter = create<NotificationsCenterStore>(set => ({
	countOfNotifications: 0,
	listOfNotifications: [],
	first5Notifications: [],
	setNotificationsCenter: localStorageNotifications =>
		set(() => ({
			countOfNotifications: localStorageNotifications?.length,
			first5Notifications: localStorageNotifications?.slice(0, 5),
			listOfNotifications: localStorageNotifications
		}))
}))
