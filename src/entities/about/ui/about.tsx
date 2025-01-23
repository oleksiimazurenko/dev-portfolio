'use client'

import { useSectionInView } from '@/shared/lib/hooks'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
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
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>{t('title')}</SectionHeading>
			{locale === 'en' ? <ENDescription /> : <UKDescription />}
		</motion.section>
	)
}