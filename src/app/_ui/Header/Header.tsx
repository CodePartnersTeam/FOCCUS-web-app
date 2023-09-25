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

import { userActions } from './userActions'

import style from './Header.module.scss'

export default function Header() {
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
				<div className={style.notification}></div>

				{/* Dropdown User Actions */}
				<Root>
					<Trigger>
						<div className={style['avatar-container']}>{/* <Avatar /> */}</div>
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
