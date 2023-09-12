import { Inter, Montserrat, Montserrat_Alternates as MontserratAlternates } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter'
})

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-montserrat'
})

const montserratAlternates = MontserratAlternates({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-montserrat-alternate'
})

export { inter, montserrat, montserratAlternates }
