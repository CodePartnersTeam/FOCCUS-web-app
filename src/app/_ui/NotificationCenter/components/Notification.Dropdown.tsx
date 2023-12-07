'use client'

import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Icon } from '@ui/Icon'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'

import { useNotificationsCenterStore } from '../useNotificationsCenter.store'
import { NotificationItem } from './Notification.Item'
import { NotificationSheet } from './Notification.Sheet'

import style from './NotificationDropdown.module.scss'

const MAX_VISIBLE_NOTIFICATIONS = 5

export function NotificationDropdown() {
	const [isOpen, setIsOpen] = useState(false)

	const { first5Notifications, countOfNotifications, updateNotificationEvents } = useNotificationsCenterStore()

	useEffect(() => updateNotificationEvents(), [isOpen, updateNotificationEvents])

	return (
		<Dropdown.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dropdown.Trigger className={cn(countOfNotifications ? 'notification-center-trigger' : null)}>
				<Icon url='/icons/bell.svg' height={24} width={24} alt='campana' classNames='bell' />
			</Dropdown.Trigger>
			<Dropdown.Portal>
				<Dropdown.Content className={style['notification-dropdown']} align='end'>
					{countOfNotifications ? (
						<>
							{/* Title */}
							<Dropdown.Label asChild>
								<h3 className={style.title}>Notificaciones pendientes</h3>
							</Dropdown.Label>
							{/* Notification Container */}
							<Dropdown.Group className={style['notifications-items']}>
								{first5Notifications.map(({ ticket, title, description, timestamp }) => (
									<NotificationItem
										key={ticket}
										numberOfTicket={ticket}
										title={title}
										description={description}
										timestamp={timestamp}
									/>
								))}
							</Dropdown.Group>
							{/* NotificationSheet Trigger */}
							{countOfNotifications > MAX_VISIBLE_NOTIFICATIONS ? (
								<NotificationSheet setDropdownStatus={setIsOpen}>
									<button type='button' className={style['see-all']}>
										Ver {countOfNotifications - MAX_VISIBLE_NOTIFICATIONS} mas
									</button>
								</NotificationSheet>
							) : null}
						</>
					) : (
						<div className={style['no-notification']}>
							<Icon url='/icons/inbox.svg' alt='Inbox' classNames={style.inbox} />
							<p>No hay notificaciones</p>
						</div>
					)}
				</Dropdown.Content>
			</Dropdown.Portal>
		</Dropdown.Root>
	)
}
