import { type TicketName, type TicketNames, TicketTooltip, type TicketValue } from '.'

export const ticketNames: TicketNames = {
	ref: 'ref.',
	ticket: 'Ticket:'
}

interface TicketProps {
	name: TicketName
	value: TicketValue
}

export function Ticket({ name = 'ref', value }: TicketProps) {
	const stringValue = String(value)
	const length = stringValue.length

	if (length <= 8) {
		return (
			<div className='ticket'>
				{ticketNames[name]} {stringValue ? value : 'indefinido'}
			</div>
		)
	}

	return <TicketTooltip name={name} value={stringValue} />
}
