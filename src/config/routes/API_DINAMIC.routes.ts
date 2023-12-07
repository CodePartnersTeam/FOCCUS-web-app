import { KeyWithValue } from '@/common/types'

import { APIURL } from '.'

type DinamicAPIRoute = (params: unknown) => string

export const DINAMICAPIROUTES: KeyWithValue<DinamicAPIRoute> = {
	NOTIFICATIONEVENTS: dateOfLastNotification => `${APIURL}/sse/event/${dateOfLastNotification || 0}`,
	DELETENOTIFICATIONEVENT: numberOfTicket => `${APIURL}/sse/${numberOfTicket}`
}
