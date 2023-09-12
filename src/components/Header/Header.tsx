'use client'

import { Root, Trigger, Content, Label as Title, Separator, Group as GroupActions, Item as Action } from '@radix-ui/react-dropdown-menu'
import { usePathname } from 'next/navigation'
import style from './Header.module.scss'
import { ROUTES } from '@/models'
import Image from 'next/image'
import Avatar from './Avatar'
import Link from 'next/link'
import { userActions } from './user.model'

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
					{ROUTES.map(route => (
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
						<div className={style['avatar-container']}>
							<Avatar />
						</div>
					</Trigger>
					<Content className={style.dropdown} sideOffset={5}>
						<Title className={style.username}>{'{Nombre del usuario}'}</Title>
						<Separator />
						<GroupActions>
							{userActions.map(({ title, icon }) => (
								<Action key={title} className={style.item}>
									<Image width={24} height={24} src={`/icons/${icon}`} alt='Log out' className={style.icon} />
									{title}
								</Action>
							))}
						</GroupActions>
					</Content>
				</Root>
			</div>
		</header>
	) : null
}
