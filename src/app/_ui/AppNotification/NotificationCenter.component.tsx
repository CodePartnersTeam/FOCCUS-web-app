import { NotificationDropdown } from '../DropDown/Notification.dropdown'

export function NotificationCenter() {
	return (
		<>
			<section className='notification-center'>
				<button className='bell'></button>
			</section>

			<NotificationDropdown />
		</>
	)
}
