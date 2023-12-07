import { Root as Container, Fallback, Image } from '@radix-ui/react-avatar'
import React from 'react'

interface Props {
	src: string
	size: 'sm' | 'md' | 'lg'
	name: string
	disabled?: boolean
}

export const Avatar: React.FC<Props> = ({ src, size, name, disabled = false }) => {
	const firstletter = name[0]

	const isDisable = disabled ? 'disabled' : undefined

	return (
		<Container className={`avatar-container ${size} ${isDisable}`}>
			<Image src={src} alt={name} />
			<Fallback className='fallback'>{firstletter}</Fallback>
		</Container>
	)
}
