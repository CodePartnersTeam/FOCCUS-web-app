import { Group as GroupActions, DropdownMenuSeparator as Separator } from '@radix-ui/react-dropdown-menu'
import React from 'react'

import style from './Ellipses.module.scss'

interface EllipsesGroupProps {
	hasSeparator?: boolean
	children: React.ReactNode
}

export function EllipsesGroup({ children, hasSeparator = true }: EllipsesGroupProps) {
	return (
		<>
			<GroupActions className={style.group}>
				{children}
				{hasSeparator && <Separator className={style.separator} />}
			</GroupActions>
		</>
	)
}
