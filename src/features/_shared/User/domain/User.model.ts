import { Credentials } from './Credential.model'

export interface User {
	credentials?: Credentials
	name: string
	role: string
	id: string
}

export const userDefaultValue: User = {
	name: '',
	role: '',
	id: ''
}
