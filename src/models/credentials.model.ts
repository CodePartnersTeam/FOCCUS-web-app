export type Password = string
export type Username = string

export interface Credentials {
	username: Password
	password: Username
}

export const credentialsDefaultValue: Credentials = {
	username: '',
	password: ''
}
