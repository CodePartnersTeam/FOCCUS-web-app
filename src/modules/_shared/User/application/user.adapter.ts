import { SessionDTO } from '@shared/Session/domain'

import { User } from '../domain'

export function userAdapter(session: SessionDTO): User {
	console.log(session)
	return {
		id: session.userFound.id,
		name: session.userFound.name,
		role: session.role
	}
}
