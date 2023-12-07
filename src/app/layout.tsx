import { Header } from '@/app/components/Header'
import { inter, lexend, montserrat, montserratAlternates } from '@fonts'
import { Providers } from '@providers'
import '@styles/app.scss'
import cn from 'classnames'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'FOCCUS | Software de gestion para opticas'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' className={cn(inter.variable, montserrat.variable, montserratAlternates.variable, lexend.variable)}>
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}
