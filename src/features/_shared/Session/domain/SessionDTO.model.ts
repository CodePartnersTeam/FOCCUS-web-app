export interface SessionDTO {
	token: string
	userFound: {
		id: string
		usernames: string
		name: string
	}
	role: string
}
