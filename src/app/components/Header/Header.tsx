'use client'

import { NotificationDropdown } from '@/app/components/NotificationCenter/components/Notification.Dropdown'
import { APPROUTES } from '@/config/routes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { EllipsesDropdown, EllipsesGroup, EllipsesItem } from '../_Dropdown/Ellipses'
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
				{/* Logo Foccus */}
				<Image width={128} height={24} src='/images/logos/LogoFoccus.png' alt='Logo Foccus' className={style.logo} />
				{/* Dropdown User Actions */}
				<EllipsesDropdown triggerDirection='vertical'>
					<EllipsesGroup>
						{userActions.map(({ label, icon, service }) => (
							<EllipsesItem key={label} icon={icon} service={() => service()}>
								{label}
							</EllipsesItem>
						))}
					</EllipsesGroup>
				</EllipsesDropdown>
			</div>
		</header>
	) : null
}
