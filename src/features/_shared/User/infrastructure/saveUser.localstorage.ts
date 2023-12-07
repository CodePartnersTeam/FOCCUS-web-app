'use client'

import { User } from '../domain'

export function saveUserInLocalStorage(user: User) {
	localStorage.setItem('user', JSON.stringify(user))
}
