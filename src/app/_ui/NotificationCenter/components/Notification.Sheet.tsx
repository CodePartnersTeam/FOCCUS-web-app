'use client'

import './SheetNotification.scss'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Dialog from '@radix-ui/react-dialog'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'

import { useNotificationsCenter } from '../useNotificationsCenter.store'
import { NotificationItem } from './NotificationItem'

export function NotificationSheet() {
	const { listOfNotifications } = useNotificationsCenter()

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button type='button'>Ver todo</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='notifications-sheet-overlay' />
				<Dialog.Content className='notifications-sheet-content'>
					<Dialog.Title asChild>
						<h3 className='notifications-sheet-title'>
							Notificaciones
							<div className='checkbox-wrapper'>
								<Checkbox.Root className='checkbox' id='c1'>
									<Checkbox.Indicator className='checkbox-indicator'>
										<CheckIcon />
									</Checkbox.Indicator>
								</Checkbox.Root>
								<label className='label' htmlFor='c1'>
									Mostrar vistos
								</label>
							</div>
						</h3>
					</Dialog.Title>
					<Dialog.Description className='notifications-sheet-notification-list'>
						{
							// TODO: Implementar componente Scrollbar
						}
						{listOfNotifications.map(({ ticket, seen, title, description, timestamp }) => (
							<NotificationItem
								key={ticket}
								numberOfTicket={ticket}
								disabled={seen}
								title={title}
								description={description}
								timestamp={timestamp}
							/>
						))}
					</Dialog.Description>
					<Dialog.Close asChild>
						<button className='close-button' aria-label='Close'>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
