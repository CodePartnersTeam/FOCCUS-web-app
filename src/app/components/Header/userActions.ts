import { logoutService } from '@/features/Session/infrastructure/logout.service'
import { UserActions } from '@/features/_shared/User/domain/UserActions.model'

export const userActions: Array<UserActions> = [
	{
		type: 'Cerrar sesion',
		icon: 'out.svg',
		service: async () => await logoutService()
	}
]
