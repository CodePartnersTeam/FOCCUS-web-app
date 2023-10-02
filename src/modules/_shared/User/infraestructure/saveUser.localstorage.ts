/* eslint-disable hexagonal-architecture/enforce */
'use client'

import { User } from '../domain'

/* eslint-disable hexagonal-architecture/enforce */

export function saveUserInLocalStorage(user: User) {
	localStorage.setItem('user', JSON.stringify(user))
}
