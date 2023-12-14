import { Content, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'

import { Icon } from '../../Icon'

import style from './Ellipses.module.scss'

interface EllipsesProps {
	triggerDirection: string
	children: React.ReactNode
}

function EllipsesDropdown({ children, triggerDirection }: EllipsesProps) {
	return (
		<>
			<Root>
				<Trigger className={`${style.trigger} ${style[`trigger-${triggerDirection}`]}`}>
					<Icon url='/icons/options.svg' alt='Options' width={20} height={20} />
				</Trigger>
				<Content sideOffset={5} className={style.container}>
					{children}
				</Content>
			</Root>
		</>
	)
}

export default EllipsesDropdown
