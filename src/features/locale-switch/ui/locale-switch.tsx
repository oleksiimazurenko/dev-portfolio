'use client'

import { useRouter } from '@base/src/shared/i18n/routing'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'

export function LocaleSwitch() {
	const locale = useLocale()
	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	const onSelectChange = () => {
		const nextLocale = locale === 'en' ? 'ua' : 'en'
		startTransition(() => {
			router.replace(nextLocale, { scroll: false })
		})
	}

	return (
		<button
			className='hover:cursor-pointer fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
			onClick={onSelectChange}
			disabled={isPending}
		>
			{locale === 'en' ? 'UA' : 'EN'}
		</button>
	)
}
