'use client'

import { Project } from '@/entities/project/ui/project'
import { SectionHeading } from '@/entities/section-heading/ui/section-heading'
import { useSectionInView } from '@/shared/lib/hooks'
import { projectsData } from '@base/src/shared/lib/projects-data'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

export function Projects() {
	const { ref } = useSectionInView('Projects', 0.5)
	const locale = useLocale()
	const t = useTranslations('MyProjects')

	const projects = locale === 'en' ? projectsData.en : projectsData.ua

	return (
		<section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
			<SectionHeading>{t('title')}</SectionHeading>
			<div>
				{projects.map(({ title, description, tags, imageUrl }, index) => (
					<React.Fragment key={index}>
						<Project title={title} description={description} tags={tags} imageUrl={imageUrl}/>
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
