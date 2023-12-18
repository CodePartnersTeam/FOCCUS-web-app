'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import cn from 'classnames'
import React, { type ReactNode, memo } from 'react'

import { TooltipContentProps, type TooltipTriggerProps } from '.'

function Tooltip({ children, open }: { children: ReactNode; open?: boolean }) {
	const childrensCount = React.Children.count(children)
	if (childrensCount !== 2) {
		throw new Error('Tooltip component must have exactly one Tooltip.Trigger and one Tooltip.Content')
	}

	return (
		<TooltipPrimitive.Provider delayDuration={0} skipDelayDuration={0}>
			<TooltipPrimitive.Root open={open}>{children}</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	)
}

Tooltip.Trigger = memo(function Trigger({ children, classNames, ...props }: TooltipTriggerProps) {
	return (
		<TooltipPrimitive.Trigger className={cn(classNames)} {...props}>
			{children}
		</TooltipPrimitive.Trigger>
	)
})

Tooltip.Content = memo(function Content({ children, align, side, classNames, ...props }: TooltipContentProps) {
	return (
		<TooltipPrimitive.Content align={align} side={side} className={cn('tooltip', classNames)} {...props}>
			{children}
			<TooltipPrimitive.Arrow width={16} height={8} className='tooltip-arrow' />
		</TooltipPrimitive.Content>
	)
})

export { Tooltip }
