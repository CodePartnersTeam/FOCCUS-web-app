/* * password: requiere que sea seguro aA1@ y min 6 caracteres */

export type Password = string
export type Username = string

export interface Credentials {
	username: Username
	password: Password
}

export const credentialsDefaultValue: Credentials = {
	username: 'luiscarlos',
	password: 'iaASA123#'
}
