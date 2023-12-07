import { KeyWithValue } from '@/common/types'

export const APIURL: string = 'https://api-foccus.up.railway.app'

export const APIROUTES: KeyWithValue<string> = {
	LOGIN: `${APIURL}/auth/login`,
	LOGOUT: `${APIURL}/auth/logout`
}
