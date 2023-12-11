'use client'

import { KeyWithValue } from '@/common/types'
import { Icon } from '@components/Icon'
import * as Tooltip from '@radix-ui/react-tooltip'
import cn from 'classnames'
import React, { useState } from 'react'
import { z } from 'zod'

interface PasswordProps {
	type: 'new-password' | 'current-password'
}

function CurrentPassword() {
	const [shown, setShown] = useState(false)

	function switchShown() {
		setShown(!shown)
	}
	return (
		<>
			<input
				id='password'
				type={shown ? 'text' : 'password'}
				name='password'
				placeholder='••••••••'
				autoComplete='current-password'
				required
			/>
			<button type='button' onClick={switchShown} className='action'>
				<Icon url={shown ? '/icons/hide.svg' : '/icons/show.svg'} alt='' />
			</button>
		</>
	)
}

function NewPassword() {
	const [validations, setValidations] = useState<KeyWithValue<boolean>>({
		minLenght: false,
		number: false,
		mayusLetter: false,
		specialCharacter: false
	})

	function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.target

		setValidations({
			minLenght: z.string().min(8).safeParse(value).success,
			number: z.string().regex(/[0-9]/).safeParse(value).success,
			mayusLetter: z.string().regex(/[A-Z]/).safeParse(value).success,
			specialCharacter: z
				.string()
				.regex(/[~!#@*]/)
				.safeParse(value).success
		})
	}

	return (
		<>
			<input
				id='password'
				type='password'
				name='password'
				placeholder='Nueva contraseña'
				autoComplete='new-password'
				onChange={onChangePassword}
				required
			/>
			<Tooltip.Provider delayDuration={0} skipDelayDuration={0}>
				<Tooltip.Root open>
					<Tooltip.Trigger className='action' asChild>
						<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.2827 1.90493C10.3 1.40818 10.718 1.01492 11.2105 1.08176C13.1638 1.34684 14.9855 2.24783 16.3861 3.65829C17.7868 5.06876 18.675 6.89666 18.9265 8.85176C18.9899 9.34476 18.5937 9.75996 18.0968 9.77384V9.77384C17.6 9.78771 17.1917 9.39443 17.116 8.90318C16.8853 7.40644 16.1868 6.01204 15.1089 4.92663C14.0311 3.84123 12.6416 3.13296 11.1465 2.89184C10.6558 2.8127 10.2653 2.40169 10.2827 1.90493V1.90493Z'
								fill={Object.values(validations)[0] ? '#057A44' : '#DE3344'}
							/>
							<path
								d='M18.0951 10.2827C18.5918 10.3 18.9851 10.718 18.9182 11.2105C18.6532 13.1638 17.7522 14.9855 16.3417 16.3861C14.9312 17.7868 13.1033 18.675 11.1482 18.9265C10.6552 18.9899 10.24 18.5937 10.2262 18.0968V18.0968C10.2123 17.6 10.6056 17.1917 11.0968 17.116C12.5936 16.8853 13.988 16.1868 15.0734 15.1089C16.1588 14.0311 16.867 12.6416 17.1082 11.1465C17.1873 10.6558 17.5983 10.2653 18.0951 10.2827V10.2827Z'
								fill={Object.values(validations)[1] ? '#057A44' : '#DE3344'}
							/>
							<path
								d='M9.71731 18.0951C9.69996 18.5918 9.28201 18.9851 8.78947 18.9182C6.83617 18.6532 5.01451 17.7522 3.61386 16.3417C2.21321 14.9312 1.32496 13.1033 1.07352 11.1482C1.01012 10.6552 1.4063 10.24 1.90316 10.2262V10.2262C2.40002 10.2123 2.8083 10.6056 2.88401 11.0968C3.11468 12.5936 3.81324 13.988 4.89109 15.0734C5.96894 16.1588 7.35843 16.867 8.85352 17.1082C9.34424 17.1873 9.73466 17.5983 9.71731 18.0951V18.0951Z'
								fill={Object.values(validations)[2] ? '#057A44' : '#DE3344'}
							/>
							<path
								d='M1.90493 9.71731C1.40818 9.69997 1.01492 9.28201 1.08176 8.78947C1.34684 6.83617 2.24783 5.01452 3.65829 3.61386C5.06876 2.21321 6.89666 1.32497 8.85176 1.07352C9.34476 1.01012 9.75996 1.4063 9.77384 1.90316V1.90316C9.78771 2.40002 9.39443 2.8083 8.90318 2.88401C7.40644 3.11469 6.01204 3.81324 4.92663 4.89109C3.84123 5.96894 3.13296 7.35843 2.89184 8.85353C2.8127 9.34424 2.40169 9.73466 1.90493 9.71731V9.71731Z'
								fill={Object.values(validations)[3] ? '#057A44' : '#DE3344'}
							/>
						</svg>
					</Tooltip.Trigger>
					<Tooltip.Content side='right' className='tooltip-password-content'>
						<Tooltip.Arrow width={16} height={8} className='tooltip-password-arrow' />
						{[
							{ id: 'minLenght', description: '8 caracteres minimo' },
							{ id: 'number', description: 'Numero [0...9]' },
							{ id: 'mayusLetter', description: 'Letra mayuscula [A...Z]' },
							{ id: 'specialCharacter', description: 'Carácter especial [~!#@*]' }
						].map(({ id, description }: { id: string; description: string }) => (
							<div key={id} className={cn('tooltip-validation-item', validations[id] && 'is-valid')}>
								{validations[id] ? (
									<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M4 10.1128L7.92124 14L16 6'
											stroke='#A6F4C5'
											color='#A6F4C5'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								) : (
									<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M14 6L10 10M10 10L6 6M10 10L6 14M10 10L14 14'
											color='#FD9B9D'
											stroke='#FD9B9D'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								)}

								{description}
							</div>
						))}
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
		</>
	)
}

export function Password({ type }: PasswordProps) {
	return (
		<label className='password'>
			Ingrese su contraseña
			<div className='container'>{type === 'current-password' ? <CurrentPassword /> : <NewPassword />}</div>
		</label>
	)
}
