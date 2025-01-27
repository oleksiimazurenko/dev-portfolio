'use client'

import { useSectionInView } from '@/shared/lib/hooks'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '../../section-heading/ui/section-heading'

export function Contact() {
	const { ref } = useSectionInView('Contact')
	const t = useTranslations('ContactMe')

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>{t('title')}</SectionHeading>

			<p className='text-gray-700 -mt-6 dark:text-white/80'>
				{t('please_contact')}{' '}
				<a className='underline' href='mailto:example@gmail.com'>
					newiqa@gmail.com
				</a>{' '}
				{t('or_send_me')}{' '}
				<a
					className='underline'
					href='https://t.me/AlekseyMazurenko'
					target='_blank'
				>
					telegram
				</a>
				.
			</p>
		</motion.section>
	)
}
