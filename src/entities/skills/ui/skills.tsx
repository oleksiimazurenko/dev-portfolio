'use client'

import { SectionHeading } from '@/entities/section-heading/ui/section-heading'
import { useSectionInView } from '@/shared/lib/hooks'
import { skillColors, uniqueSkills } from '@base/src/shared/lib/data'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { ScrollReveal } from '../../scroll-reveal'

// const fadeInAnimationVariants = {
// 	initial: {
// 		opacity: 0,
// 		y: 100,
// 	},
// 	animate: (index: number) => ({
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			delay: 0.05 * index,
// 		},
// 	}),
// }

export function Skills() {
	const { ref } = useSectionInView('Skills')
	const t = useTranslations('MySkills')

	const sd = useMemo(() => uniqueSkills, [])

	return (
		<section
			id='skills'
			ref={ref}
			className='mb-28 max-w-[53rem] w-full scroll-mt-28 text-center sm:mb-40 h-min'
		>
			<SectionHeading>{t('title')}</SectionHeading>

			{/* <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
				{skillsData.map((skill, index) => (
					<motion.li
						className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
						key={index}
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul> */}

			{/* <div className='h-[200px] w-full border-[0.5px] dark:border-slate-200/30 border-slate-900/30 rounded-md'>
				<FallingText
					text={sd.join(' ')}
					highlightWords={sd}
					// highlightClass='highlighted'
					trigger='scroll'
					backgroundColor='transparent'
					wireframes={false}
					gravity={0.60}
					fontSize='18px'
					mouseConstraintStiffness={0.9}
				/>
			</div> */}

			<ScrollReveal
				baseOpacity={20}
				enableBlur={true}
				baseRotation={2}
				blurStrength={4}
				uniqueSkills={sd}
				skillColors={skillColors}
			/>


		</section>
	)
}
