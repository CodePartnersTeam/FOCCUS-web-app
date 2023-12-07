import { Icon } from '@/app/components/Icon'

interface NotificationToastProps {
	title: string
	description: string
}

export function NotificationToast({ title, description }: NotificationToastProps) {
	return (
		<div className='notification-toast-container'>
			<Icon url='/icons/bell.svg' alt='campana' classNames='bell' />
			<div className='content'>
				<p className='title'>{title}</p>
				<p className='description'>{description}</p>
			</div>
		</div>
	)
}
