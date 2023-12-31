'use client'

import { launchNotificacionsToast } from '@/app/components/NotificationCenter/notificationToast.launch'
import { getAuthorization } from '@/common/utils'
import { DINAMICAPIROUTES } from '@/config/routes'
import { onReceivingMessage, saveNotificationEventsToLS } from '@/features/NotificationsCenter/infrastructure'
import React, { useEffect } from 'react'
import { SSE } from 'sse.js'

const MAX_RECONNECT_TRIES = 3
let RECONNECT_ATTEPMS = 0

export function NotificationCenter({ children }: { children: React.ReactNode }) {
	useEffect(() => {
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
	}, [])

	return children
}
