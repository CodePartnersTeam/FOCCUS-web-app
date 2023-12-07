import { z } from 'zod'

import { Credentials } from './Credential.model'

const regex = {
	password: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g
}

const credentialsSchema = z.object({
	username: z.string().min(5),
	password: z.string().min(8).regex(regex.password)
})

export function credentialsIsValid(credentials: Credentials) {
	return credentialsSchema.safeParse(credentials).success
}
