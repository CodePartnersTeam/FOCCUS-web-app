import { getValidationError } from '@common/logic/getError'
import axios, { AxiosRequestConfig } from 'axios'
import { toast } from 'sonner'

import { API } from '../routes'

const setAuthorizationHeaders = (req: AxiosRequestConfig) => {
	const session = localStorage.getItem('sesion')

	if (session) {
		const { token } = JSON.parse(session)
		const newHeaders = {
			Authorization: `Bearer ${token}`
		}
		req.headers = newHeaders
		return req
	}
	return req
}

const Http = axios.create({ baseURL: API })

Http.interceptors.request.use(req => setAuthorizationHeaders(req))

Http.interceptors.response.use(
	res => {
		toast.success(JSON.stringify(res))
		return res
	},
	error => {
		toast.error(getValidationError(error.code))
		return Promise.reject(error)
	}
)

export default Http