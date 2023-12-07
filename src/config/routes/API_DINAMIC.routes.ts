import { KeyWithValue } from '@/common/types'

import { APIURL } from '.'

type DinamicAPIRoute = (params: any) => string

export const DINAMICAPIROUTES: KeyWithValue<DinamicAPIRoute> = {
	NOTIFICATIONEVENTS: dateOfLastNotification => `${APIURL}/sse/event/${dateOfLastNotification || 0}`
}
