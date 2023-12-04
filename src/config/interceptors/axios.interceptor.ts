import { getAuthorization } from '@/common/utils'
import { getValidationError } from '@/common/utils/getError.util'
import axios, { AxiosRequestConfig } from 'axios'
import { toast } from 'sonner'

import { API } from '../routes'

const setAuthorizationHeaders = (req: AxiosRequestConfig) => {
	const newHeaders = {
		Authorization: getAuthorization()
	}
	req.headers = newHeaders
	return req
}

const Http = axios.create({ baseURL: API })

Http.interceptors.request.use((req): any => setAuthorizationHeaders(req))

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
