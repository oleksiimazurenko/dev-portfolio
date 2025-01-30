'use client'

import { useSectionInView } from '@/shared/lib/hooks'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { ListFocus } from '../../list-focus'
import { SectionHeading } from '../../section-heading/ui/section-heading'
import { ENDescription } from '../locale/en-description'
import { UKDescription } from '../locale/uk-description'

export function About() {
	const { ref } = useSectionInView('About')
	const locale = useLocale()
	const t = useTranslations('AboutMe')

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 flex flex-col justify-center items-center gap-12'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>{t('title')}</SectionHeading>
			<div>{locale === 'en' ? <ENDescription /> : <UKDescription />}</div>

			<div className='flex flex-col justify-center items-center gap-6'>
				<h3 className='text-3xl dark:text-slate-200 uppercase text-slate-900'>
					{t('not_working_if')}
				</h3>
				<ListFocus
				sentence='DRY KISS SOLID YAGNI'
				manualMode={true}
				blurAmount={8}
				borderColor='#f3f4f6'
				animationDuration={1}
				pauseBetweenAnimations={1}
			/>
			</div>

			
		</motion.section>
	)
}
