'use client'

import * as Dropdown from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'

import { NotificationItem } from '../AppNotification/NotificationItem'
import { userNoti } from '../AppNotification/mockup'
import { NotificationSheet } from '../SheetNotifications/Notification.Sheet'

import style from './DropDown.module.scss'

export function NotificationDropdown() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<Dropdown.Root open={isOpen} onOpenChange={() => setIsOpen(status => !status)} key={'NotificationDropdown'}>
			<Dropdown.Trigger>hola</Dropdown.Trigger>
			<Dropdown.Portal>
				<Dropdown.Content className={style['notification-dropdown']} align='end'>
					{/* Title */}
					<Dropdown.Label className={style.title}>
						<h3>+99</h3>
						<p>Notificaciones pendientes</p>
					</Dropdown.Label>
					{/* Notification Container */}
					<Dropdown.Group className={style['notifications-items']}>
						{userNoti.slice(0, 5).map(notification => (
							<NotificationItem
								key={notification.ticket}
								numberOfTicket={notification.ticket}
								disabled={notification?.seen}
								{...notification}
							/>
						))}
					</Dropdown.Group>
					{/* Actions */}
					<Dropdown.Group className={style.actions}>
						<button type='button' className={style['delete-all']}>
							Borrar todo
						</button>
						<NotificationSheet />
					</Dropdown.Group>
				</Dropdown.Content>
			</Dropdown.Portal>
		</Dropdown.Root>
	)
}
