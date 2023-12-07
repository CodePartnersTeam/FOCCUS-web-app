'use client'

import { APPROUTES } from '@routes'
import { NotificationCenter } from '@ui/NotificationCenter/NotificationCenter'
import { usePathname } from 'next/navigation'
import React from 'react'

export function NotificationCenterProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()

	if (pathname !== APPROUTES.LOGIN) {
		return <NotificationCenter>{children}</NotificationCenter>
	}

	return children
}
