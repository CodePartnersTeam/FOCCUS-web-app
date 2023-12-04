'use client'

import {
	getNotificationsEventsFromLocalStorage,
	useNotificationsCenter
} from '@/modules/NotificationsCenter/infrastructure'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import React from 'react'

import { Icon } from '../../Icon'
import { NotificationSheet } from './Notification.Sheet'
import { NotificationItem } from './NotificationItem'

import style from './DropDown.module.scss'

export function NotificationDropdown() {
	const { first5Notifications, countOfNotifications, setNotificationsCenter } = useNotificationsCenter()

	function handleOpenChange() {
		setNotificationsCenter(getNotificationsEventsFromLocalStorage())
	}

	// TODO: useMemo para mejorar el performance
	// useEffect(() => console.log(first5Notifications), [first5Notifications])

	return (
		<Dropdown.Root onOpenChange={handleOpenChange}>
			<Dropdown.Trigger className={cn(countOfNotifications && 'notification-center-trigger')}>
				<Icon url='/icons/bell.svg' height={24} width={24} alt='campana' classNames='bell' />
			</Dropdown.Trigger>
			<Dropdown.Portal>
				<Dropdown.Content className={style['notification-dropdown']} align='end'>
					{countOfNotifications ? (
						<>
							{/* Title */}
							<Dropdown.Label className={style.title}>
								<h3>{countOfNotifications}</h3>
								<p>Notificaciones pendientes</p>
							</Dropdown.Label>
							{/* Notification Container */}
							<Dropdown.Group className={style['notifications-items']}>
								{first5Notifications.map(({ ticket, seen, title, description, timestamp }) => (
									<NotificationItem
										key={ticket}
										numberOfTicket={ticket}
										disabled={seen}
										title={title}
										description={description}
										timestamp={timestamp}
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
						</>
					) : (
						<h1>Poner algo aqui</h1>
					)}
				</Dropdown.Content>
			</Dropdown.Portal>
		</Dropdown.Root>
	)
}
