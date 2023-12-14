import { Content, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'

import { Icon } from '../../Icon'

import style from './Ellipses.module.scss'

interface EllipsesProps {
	triggerDirection?: 'vertical' | 'horizontal'
	children: React.ReactNode
}

export function EllipsesDropdown({ children, triggerDirection = 'horizontal' }: EllipsesProps) {
	return (
		<>
			<Root>
				<Trigger className={`${style.trigger} ${style[`trigger-${triggerDirection}`]}`}>
					<Icon url='/icons/ellipses.svg' alt='Options' width={20} height={20} />
				</Trigger>
				<Content sideOffset={5} className={style.container}>
					{children}
				</Content>
			</Root>
		</>
	)
}
