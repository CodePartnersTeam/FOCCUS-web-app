import { Session, SessionDTO } from '../domain'

export async function sessionAdapter(session: SessionDTO) {
	const formattedSession: Session = {
		token: session.token,
		user: {
			id: session.userFound.id,
			name: session.userFound.name,
			role: session.role
		}
	}

	return formattedSession
}
