import React from 'react'

import { NotificationsProvider } from '.'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NotificationsProvider />
			{children}
		</>
	)
}
