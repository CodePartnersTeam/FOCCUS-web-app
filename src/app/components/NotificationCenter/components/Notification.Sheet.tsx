'use client'

import './NotificationSheet.scss'
import { Icon } from '@/app/components/Icon'
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

import { useNotificationsCenterStore } from '../useNotificationsCenter.store'
import { NotificationItem } from './Notification.Item'

interface NotificationSheetProps {
	children: React.ReactNode
	setDropdownStatus: any
}

export function NotificationSheet({ children, setDropdownStatus }: NotificationSheetProps) {
	const { notificationEvents, countOfNotifications } = useNotificationsCenterStore()

	function handleOpenChange(open: boolean) {
		if (open === false) setDropdownStatus(false)
	}

	return (
		<Dialog.Root onOpenChange={handleOpenChange}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='notifications-sheet-overlay' />
				<Dialog.Content className='notifications-sheet-content'>
					{/* Title */}
					<Dialog.Title asChild>
						<div className='title-container'>
							<h3 className='title'>{countOfNotifications} Notificaciones</h3>
							<Dialog.Close>
								<Icon classNames='close-button' url='/icons/close.svg' alt='boton de cierre' />
							</Dialog.Close>
						</div>
					</Dialog.Title>
					<Dialog.Description asChild>
						<section className='notifications-sheet-notification-list'>
							{
								// TODO: Implementar componente Scrollbar
							}
							{notificationEvents.map(({ ticket, title, description, timestamp }) => (
								<NotificationItem
									key={ticket}
									numberOfTicket={ticket}
									title={title}
									description={description}
									timestamp={timestamp}
								/>
							))}
						</section>
					</Dialog.Description>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
