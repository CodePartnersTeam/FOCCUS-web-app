'use client'

import React from 'react'
import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip'
import s from './infoTooltip.module.scss'

export function InfoTooltip({ content = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' }: { content: string }) {
	return (
		<Provider>
			<Root delayDuration={100}>
				<Trigger className={s.trigger}>i</Trigger>
				<Portal>
					<Content side='right' className={s.content}>
						{content}
					</Content>
				</Portal>
			</Root>
		</Provider>
	)
}
