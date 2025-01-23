import { About } from '@/entities/about/ui/about'
import { Contact } from '@/entities/contact/ui/contact'
import { Experience } from '@/entities/experience/ui/experience'
import { Intro } from '@/entities/intro/ui/intro'
import { Projects } from '@/entities/projects/ui/projects'
import { SectionDivider } from '@/entities/section-divider/ui/section-divider'
import { Skills } from '@/entities/skills/ui/skills'

export default function Home() {
	return (
		<main className='flex flex-col items-center px-4'>
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	)
}