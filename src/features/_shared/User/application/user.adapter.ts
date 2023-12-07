import { SessionDTO } from '@/features/_shared/Session/domain'

import { User } from '../domain'

export function userAdapter(session: SessionDTO): User {
	return {
		id: session.userFound.id,
		name: session.userFound.name,
		role: session.role
	}
}
