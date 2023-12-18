import { logoutService } from '@/features/Session/infrastructure/logout.service'
import { UserActions } from '@/features/_shared/User/domain/UserActions.model'

export const userActions: Array<UserActions> = [
	{
		label: 'Cerrar sesion',
		icon: 'icons/out.svg',
		service: async () => await logoutService()
	}
]
