'use client'

import {
	Item as Action,
	Content,
	Group as GroupActions,
	Root,
	Separator,
	Label as Title,
	Trigger
} from '@radix-ui/react-dropdown-menu'
import { MAINROUTES } from '@routes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { NotificationItem } from '../AppNotification/NotificationItem'
import { Avatar } from '../Avatar'
import { userNoti } from './../AppNotification/mockup'
import { userActions } from './userActions'

import style from './Header.module.scss'

export function Header() {
	const pathname = usePathname()

	const isCurrentPage = (route: string) => {
		if (pathname.slice(1).replaceAll('_', ' ') === route) return style['current-page']
		else return undefined
	}

	return pathname !== '/' ? (
		<header className={style.header}>
			<nav className={style['nav-bar']}>
				<ul role='list'>
					{MAINROUTES.map(route => (
						<li key={route}>
							<Link href={route} className={isCurrentPage(route)}>
								{route}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className={style['user-actions']}>
				{/* Dropdown Notification Center */}
				<Root>
					<Trigger>
						<div className={style.notification}></div>
					</Trigger>
					<Content className={style['notification-dropdown']} align='end'>
						{/* Title */}
						<Title className={style.title}>
							<h3>+99</h3>
							<p>Notificaciones pendientes</p>
						</Title>
						{/* Notification Container */}
						<GroupActions className={style['notifications-items']}>
							{userNoti.slice(0, 5).map(notification => (
								<NotificationItem key={notification.ticket} {...notification} />
							))}
						</GroupActions>
						{/* Actions */}
						<GroupActions className={style.actions}>
							<button type='button' className={style['delete-all']}>
								Borrar todo
							</button>
							<button type='button' className={style['view-all']}>
								Ver todo
							</button>
						</GroupActions>
					</Content>
				</Root>
				{/* Dropdown User Actions */}
				<Root>
					<Trigger>
						<Avatar src='/images/avatar_test.svg' size='md' name='Antonio Cabrales' />
					</Trigger>
					<Content className={style.dropdown} sideOffset={5}>
						<Title className={style.username}>{'{Nombre del usuario}'}</Title>
						<Separator />
						<GroupActions>
							{userActions.map(({ type, icon, service }) => (
								<Action key={type} className={style.item} onClick={service}>
									<Image width={24} height={24} src={`/icons/${icon}`} alt='Log out' className={style.icon} />
									{type}
								</Action>
							))}
						</GroupActions>
					</Content>
				</Root>
			</div>
		</header>
	) : null
}
