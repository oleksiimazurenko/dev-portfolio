'use client'

import { usePathname, useRouter } from '@base/src/shared/i18n/routing'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'

export function LocaleSwitch() {
	const locale = useLocale()
	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	const pathname = usePathname()

	function onSelectChange() {
		const nextLocale = locale === 'en' ? 'ua' : 'en'

		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.

				{ pathname, scroll: false },
				{ locale: nextLocale }
			)
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
