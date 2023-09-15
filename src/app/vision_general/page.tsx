'use client'

import React from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { logout } from '@/services/Login'

export default function Page() {
	const router = useRouter()

	return (
		<button
			onClick={async () => {
				const { message } = await logout()
				router.push('/')
				toast(message)
			}}
		>
			Cerrar Sesion
		</button>
	)
}
