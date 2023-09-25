import { inter, montserrat, montserratAlternates } from '@fonts'
import { Providers } from '@providers'
import '@styles/app.scss'
import { Header } from '@ui/Header'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'FOCCUS | Software de gestion para opticas'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' className={`${inter.variable} ${montserrat.variable} ${montserratAlternates.variable}`}>
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}
