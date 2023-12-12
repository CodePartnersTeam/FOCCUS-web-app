'use client'

import { NotificationDropdown } from '@/app/components/NotificationCenter/components/Notification.Dropdown'
import { APPROUTES } from '@/config/routes'
import {
	Item as Action,
	Content,
	Group as GroupActions,
	Root,
	Separator,
	Label as Title,
	Trigger
} from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { NAVIGATIONHEADER } from './Header.navigation'
import { userActions } from './userActions'

import style from './Header.module.scss'

export function Header() {
	const pathname = usePathname()

	const isCurrentPage = (route: string) => {
		if (pathname.slice(1).replaceAll('_', ' ') === route) return style['current-page']
		else return undefined
	}

	return pathname !== APPROUTES.LOGIN ? (
		<header className={style.header}>
			<nav className={style['nav-bar']}>
				<ul role='list'>
					{NAVIGATIONHEADER.map((route: string) => {
						const parsedRoutes = route.slice(1)
						return (
							<li key={parsedRoutes}>
								<Link href={parsedRoutes} className={isCurrentPage(parsedRoutes)}>
									{parsedRoutes}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
			<div className={style['user-actions']}>
				{/* Notification Center */}
				<NotificationDropdown />
				<Image width={128} height={30} src='/images/logos/LogoFoccus.png' alt='Logo Foccus' className={style.logo} />
				{/* Dropdown User Actions */}
				<Root>
					<Trigger>
						<Image width={7} height={7} src='/icons/options.svg' alt='Antonio Cabrales' />
					</Trigger>
					<Content className={style.dropdown} sideOffset={5}>
						<Title className={style.username}>{'{Nombre del usuario}'}</Title>
						<Separator />
						<GroupActions>
							{userActions.map(({ type, icon, service }) => (
								<Action key={type} className={style.item} onClick={event => service(event)}>
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
