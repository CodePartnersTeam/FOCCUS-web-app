interface UserFound {
	id: string
	username: string
	name: string
}

export interface SessionDTO {
	token: string
	userFound: UserFound
	role: string
}
