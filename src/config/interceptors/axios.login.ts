import { getValidationError } from '@/common/utils/getError.util'
import { APIURL } from '@routes'
import axios from 'axios'
import { toast } from 'sonner'

const HttpLogin = axios.create({ baseURL: APIURL })

HttpLogin.interceptors.request.use((req): any => req)

HttpLogin.interceptors.response.use(
	res => {
		toast.success(JSON.stringify(res))
		return res
	},
	error => {
		toast.error(getValidationError(error.code))
		return Promise.reject(error)
	}
)

export default HttpLogin
