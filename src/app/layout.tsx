import React from 'react'

import { Header } from '@/components/Header'
import { inter, montserrat, montserratAlternates } from '@/fonts'
import '@/styles/global.scss'
import '@/styles/index.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' className={`${inter.variable} ${montserrat.variable} ${montserratAlternates.variable}`}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
