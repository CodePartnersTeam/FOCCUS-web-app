import {
	type TooltipContentProps as TooltipContentPropsPrimitive,
	type TooltipTriggerProps as TooltipTriggerPropsPrimitive
} from '@radix-ui/react-tooltip'
import { type ReactNode } from 'react'

export interface TooltipTriggerProps extends TooltipTriggerPropsPrimitive {
	children: ReactNode
	classNames?: string
}

export interface TooltipContentProps extends TooltipContentPropsPrimitive {
	children: ReactNode
	align?: 'start' | 'center' | 'end'
	side?: 'top' | 'right' | 'bottom' | 'left'
	classNames?: string
}
