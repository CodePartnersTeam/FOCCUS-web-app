import React from 'react'

import { NotificationsProvider } from '.'
import { NotificationCenterProvider } from './NotificationCenter.provider'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NotificationsProvider />
			<NotificationCenterProvider>{children}</NotificationCenterProvider>
		</>
	)
}
