'use client'

import { NotificationCenter } from '@/app/components/NotificationCenter/NotificationCenter'
import { APPROUTES } from '@routes'
import { usePathname } from 'next/navigation'
import React from 'react'

export function NotificationCenterProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()

	if (pathname !== APPROUTES.LOGIN) {
		return <NotificationCenter>{children}</NotificationCenter>
	}

	return children
}
