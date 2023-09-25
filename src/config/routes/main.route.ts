import { KeyWithValue } from '@/common/types/KeyWithValue.type'

export const ROUTES: KeyWithValue<string> = {
	LOGIN: '/',
	LANDING: 'vision general'
}

export const MAINROUTES: Array<string> = [ROUTES.LANDING, 'pedidos', 'consultas', 'productos', 'clientes', 'asesores']
