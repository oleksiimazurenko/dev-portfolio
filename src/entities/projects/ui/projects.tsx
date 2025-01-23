'use client'

import { Project } from '@/entities/project/ui/project'
import { SectionHeading } from '@/entities/section-heading/ui/section-heading'
import { projectsData } from '@/shared/lib/data'
import { useSectionInView } from '@/shared/lib/hooks'
import React from 'react'

export function Projects() {
	const { ref } = useSectionInView('Projects', 0.5)

	return (
		<section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
