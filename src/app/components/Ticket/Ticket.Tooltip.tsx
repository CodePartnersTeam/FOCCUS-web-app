'use client'

import { Tooltip } from '@components/_Tooltips/Tooltip'

import { TicketName, ticketNames } from '.'

interface TicketTooltipProps {
	name: TicketName
	value: string
}

export function TicketTooltip({ name, value }: TicketTooltipProps) {
	const first4Characters = value.slice(0, 4)
	const last4Characters = value.slice(-4)

	return (
		<Tooltip>
			<Tooltip.Trigger classNames='ticket'>
				{ticketNames[name]} {`${first4Characters}...${last4Characters}`}
			</Tooltip.Trigger>
			<Tooltip.Content classNames='ticket-tooltip'>
				<p>{ticketNames[name]}</p>
				<b>{value}</b>
			</Tooltip.Content>
		</Tooltip>
	)
}
