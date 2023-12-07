import cn from 'classnames'
import Image from 'next/image'

interface IconProps {
	url: string
	alt: string
	height?: number
	width?: number
	classNames?: string
}

// TODO: Meter un fallback para cuando no se encuentra un Icon
export function Icon({ url, alt, height = 20, width = 20, classNames }: IconProps) {
	return <Image width={width} height={height} alt={alt} className={cn('icon', classNames)} src={url} />
}
