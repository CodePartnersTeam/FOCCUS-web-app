import style from '../Ellipses/Ellipses.module.scss'
import Image from 'next/image'
import React from 'react'

interface EllipsesItemProps {
	icon: string
	service: () => void
	children: React.ReactNode
}

function EllipsesItem({ icon, service, children }: EllipsesItemProps) {
	return (
		<button className={style.item} onClick={service}>
			<Image src={icon} alt={`${children}-img`} width={20} height={20} />
			{children}
		</button>
	)
}

export default EllipsesItem
