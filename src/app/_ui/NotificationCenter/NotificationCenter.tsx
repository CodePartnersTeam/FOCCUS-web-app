'use client'

import { launchNotificacionsToast } from '@/app/_ui/NotificationCenter/notificationToast.launch'
import { getAuthorization } from '@/common/utils'
import { DINAMICAPIROUTES } from '@/config/routes'
import { onReceivingMessage, saveNotificationEventsToLS } from '@/modules/NotificationsCenter/infrastructure'
import React from 'react'
import { SSE } from 'sse.js'

export function NotificationCenter({ children }: { children: React.ReactNode }) {
	const MAX_RECONNECT_TRIES = 3
	let RECONNECT_ATTEPMS = 0
	const dateOfLastNotification = localStorage.getItem('dateOfLastNotificationEvent')

	const conection = new SSE(DINAMICAPIROUTES.NOTIFICATIONEVENTS(dateOfLastNotification), {
		headers: { Authorization: getAuthorization() }
		// debug: true
	})

	conection.onmessage = event => {
		const { newNotifications, notificationsToSave } = onReceivingMessage(JSON.parse(event.data))
		const lastnotificationDate = newNotifications[0].timestamp
		launchNotificacionsToast(newNotifications)
		saveNotificationEventsToLS(notificationsToSave)
		localStorage.setItem('dateOfLastNotificationEvent', String(lastnotificationDate))
	}

	conection.onabort = () => {
		console.log('Conexion con el servidor cerrada')
	}

	conection.onerror = () => {
		if (RECONNECT_ATTEPMS > MAX_RECONNECT_TRIES) {
			conection.close()
		} else {
			console.log('Reconectando...')
			RECONNECT_ATTEPMS++
		}
	}

	window.addEventListener('beforeunload', () => {
		conection.close()
	})

	return children
}
