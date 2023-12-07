import { getAuthorization } from '@/common/utils'
import { API } from '@/config/routes'
import axios from 'axios'

import { deleteNotificationByTicket } from '.'

export async function deleteNotificationEventByTicketService(numberOfTicket: string) {
	try {
		await axios.patch(`${API}/sse/${numberOfTicket}`, {}, { headers: { Authorization: getAuthorization() } })
		deleteNotificationByTicket(numberOfTicket)
	} catch (reason: any) {
		console.error(reason.message)
	}
}
