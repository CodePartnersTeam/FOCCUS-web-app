'use client'

import * as Tooltip from '@radix-ui/react-tooltip'

import { TicketName, ticketNames } from '.'

interface TicketTooltipProps {
	name: TicketName
	value: string
}

export function TicketTooltip({ name, value }: TicketTooltipProps) {
	const first4Characters = value.slice(0, 4)
	const last4Characters = value.slice(-4)

	return (
		<Tooltip.Provider delayDuration={0} skipDelayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger className='ticket' data-type='tooltip'>
					{ticketNames[name]} {`${first4Characters}...${last4Characters}`}
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className='ticket-tooltip'>
						<p>{ticketNames[name]}</p>
						<b>{value}</b>
						<Tooltip.Arrow width={16} height={8} className='tooltip-arrow' />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	)
}
