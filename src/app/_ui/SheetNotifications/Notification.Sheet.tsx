'use client'

import './SheetNotification.scss'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Dialog from '@radix-ui/react-dialog'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'

import { NotificationItem } from '../AppNotification/NotificationItem'
import { userNoti } from '../AppNotification/mockup'

export function NotificationSheet() {
	return (
		<Dialog.Root key={'NotificationSheet'}>
			<Dialog.Trigger asChild>
				<button type='button'>Ver todo</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='dialog-overlay' />
				<Dialog.Content className='dialog-content'>
					<section className='title-and-checkbox-wrapper'>
						<Dialog.Title className='dialog-title'>Notification </Dialog.Title>
						<Dialog.Description className='dialog-description'>
							<div className='checkbox-wrapper'>
								<Checkbox.Root className='checkbox-root' defaultChecked id='c1'>
									<Checkbox.Indicator className='checkbox-indicator'>
										<CheckIcon />
									</Checkbox.Indicator>
								</Checkbox.Root>
								<label className='label' htmlFor='c1'>
									Mostrar vistos
								</label>
							</div>
						</Dialog.Description>
					</section>
					<div className='notification-list'>
						<div className='notification-list-inner'>
							{userNoti.map(notification => (
								<NotificationItem
									key={notification.ticket}
									numberOfTicket={notification.ticket}
									disabled={notification?.seen}
									{...notification}
								/>
							))}
						</div>
					</div>
					<Dialog.Close asChild>
						<button className='icon-button' aria-label='Close'>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
