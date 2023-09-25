import { logoutService } from '@/modules/Session/infrastructure/logout.service'
import { UserActions } from '@/modules/_shared/User/domain/UserActions.model'

export const userActions: Array<UserActions> = [
	{
		type: 'Cerrar sesion',
		icon: 'out.svg',
		service: async () => await logoutService()
	}
]
