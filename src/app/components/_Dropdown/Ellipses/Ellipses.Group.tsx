import { Group as GroupActions } from '@radix-ui/react-dropdown-menu'
import React from 'react'

import style from './Ellipses.module.scss'

interface EllipsesGroupProps {
	children: React.ReactNode
}

export function EllipsesGroup({ children }: EllipsesGroupProps) {
	return (
		<>
			<GroupActions className={style.group}>{children}</GroupActions>
		</>
	)
}
