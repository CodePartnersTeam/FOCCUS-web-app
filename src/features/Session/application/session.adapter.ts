import { Session, SessionDTO } from '@/features/_shared/Session/domain'

export function sessionAdapter(session: SessionDTO): Session {
	return session.token
}
