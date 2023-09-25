import { Montserrat, Montserrat_Alternates as MontserratAlternates } from 'next/font/google'

export const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-montserrat'
})

export const montserratAlternates = MontserratAlternates({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-montserrat-alternate'
})
