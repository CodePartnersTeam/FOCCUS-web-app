import { Session, SessionDTO } from '@shared/Session/domain'

export function sessionAdapter(session: SessionDTO): Session {
	return session.token
}
