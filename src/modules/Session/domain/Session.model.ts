import { User, userDefaultValue } from '@/modules/_shared/User'

export interface Session {
	token: string
	user: User
}

export const sessionDefaultValue: Session = {
	token: '',
	user: userDefaultValue
}
