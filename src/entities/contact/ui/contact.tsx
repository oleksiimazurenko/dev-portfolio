'use client'

import { useSectionInView } from '@/shared/lib/hooks'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '../../section-heading/ui/section-heading'

export function Contact() {
	const { ref } = useSectionInView('Contact')
	const t = useTranslations('ContactMe')
	// const refForm = useRef<HTMLFormElement>(null)

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

			{/* <form
				className='mt-10 flex flex-col dark:text-black'
				ref={refForm}
				onSubmit={async event => {
					event.preventDefault()

					const formData = new FormData(refForm.current!)

					const { error } = await sendEmail(formData)

					refForm.current?.reset()

					if (error) {
						toast.error(error)
						return
					}

					toast.success('Email sent successfully!')
				}}
			>
				<input
					className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
					name='senderEmail'
					type='email'
					required
					maxLength={500}
					placeholder='Your email'
				/>
				<textarea
					className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
					name='message'
					placeholder='Your message'
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form> */}
		</motion.section>
	)
}
