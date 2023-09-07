import { inter, montserrat, montserrat_alternates } from '@/fonts'
import '@/styles/global.scss'
import '@/styles/index.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className={`${inter.variable} ${montserrat.variable} ${montserrat_alternates.variable}`}>
			<body>{children}</body>
		</html>
	)
}
