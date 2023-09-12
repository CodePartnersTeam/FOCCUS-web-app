'use client'
import * as RadixAvatar from '@radix-ui/react-avatar'

export default function Avatar() {
	return (
		<RadixAvatar.Root className='avatar'>
			<RadixAvatar.Image src='/images/avatar_test.svg' alt='Colm Tuite' />
			<RadixAvatar.Fallback delayMs={600}>CT</RadixAvatar.Fallback>
		</RadixAvatar.Root>
	)
}
