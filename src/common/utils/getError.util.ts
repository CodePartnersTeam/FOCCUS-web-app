import { KeyWithValue } from '../types/KeyWithValue.type'

export const getValidationError = (errorCode: any) => {
	const codeMatcher: KeyWithValue<string> = {
		ERR_NETWORK: 'Se rompió la red',
		ERR_TIMEOUT: 'Se acabó el tiempo',
		ERR_CANCEL: 'Se canceló la petición',
		ERR_UNKNOWN: 'Error desconocido',
		ERR_400: 'Error 400',
		ERR_401: 'Error 401',
		ERR_403: 'Error 403',
		USER_NOT_FOUND: 'Usuario o contraseña invalido',
		PRODUCT_NOT_FOUND: 'Producto no encontrado'
	}

	return codeMatcher[errorCode]
}
