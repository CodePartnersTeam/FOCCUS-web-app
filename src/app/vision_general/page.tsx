'use client'
import React from 'react'
import useSWR from 'swr'
import { toast } from 'sonner'
import { Credentials } from '@/models'

const fetcher = async (url: string, credentials: Credentials) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})

	if (!res.ok) {
		let errors = {}
		errors = new Error('An error occurred while fetching the data.')
		errors = await res.json()
		throw errors
	}

	return await res.json()
}

const useUser = () => {
	const { data, error, isLoading } = useSWR(
		[
			'https://foccus-back-dashboard-production.up.railway.app/auth/login',
			{
				username: 'LuisCarlos',
				password: 'iaASA123#'
			}
		],
		([url, credentials]) => fetcher(url, credentials),
		{
			revalidateOnMount: false
		}
	)

	return {
		data,
		isLoading,
		error
	}
}

export default function App() {
	const User: any = () => useUser()
	const { data, isLoading, error } = User()

	const handleClick = async () => {
		console.log(data, isLoading, error)
	}

	if (isLoading) return <div>loading...</div>
	if (error) toast.error(`Error: ${error.message}`)
	if (data) toast.success(`Bienvenido! ${data.userFound.name}`)

	return <button onClick={() => handleClick}>Click</button>
}
