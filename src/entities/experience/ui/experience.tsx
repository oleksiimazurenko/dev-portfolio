'use client'

import { SectionHeading } from '@/entities/section-heading/ui/section-heading'
import { useTheme } from '@/shared/context/theme-context'
import { experiencesData } from '@/shared/lib/data'
import { useSectionInView } from '@/shared/lib/hooks'
import Link from 'next/link'
import React from 'react'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function Experience() {
	const { ref } = useSectionInView('Experience')
	const { theme } = useTheme()

	return (
		<section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor=''>
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background:
									theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
								boxShadow: 'none',
								border: '1px solid rgba(0, 0, 0, 0.05)',
								textAlign: 'left',
								padding: '1.3rem 2rem',
							}}
							contentArrowStyle={{
								borderRight:
									theme === 'light'
										? '0.4rem solid #9ca3af'
										: '0.4rem solid rgba(255, 255, 255, 0.5)',
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background:
									theme === 'light' ? 'white' : 'rgb(20, 28, 52, 0.9)',
								fontSize: '1.5rem',
							}}
						>
							<Link
								href={item.link}
								className='relative font-semibold capitalize text-s hover:text-slate-400 underline decoration-indigo-500/30 decoration-indigo-500'
							>
								{item.title}
							</Link>
							<p className='font-normal !mt-0'>{item.location}</p>
							<p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
								{item.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	)
}
