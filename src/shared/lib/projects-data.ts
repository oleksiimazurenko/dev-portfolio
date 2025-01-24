import corpcommentImg from '@base/public/corpcomment.png'
import rmtdevImg from '@base/public/rmtdev.png'
import wordanalyticsImg from '@base/public/wordanalytics.png'
import { StaticImageData } from 'next/image'

export type ProjectDataType = {
	title: string
	description: string
	tags: string[]
	imageUrl: StaticImageData
}

export const projectsData = {
	en: [
		{
			title: 'CorpComment',
			description:
				'Pet project. Full-stack development. Users can leave public feedback for companies.',
			tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
			imageUrl: corpcommentImg,
		},
		{
			title: 'rmtDev',
			description:
				'Pet project. Job board for remote developer job searches. Worked as a front-end developer, implemented filtering, sorting, and pagination.',
			tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
			imageUrl: rmtdevImg,
		},
		{
			title: 'Word Analytics',
			description:
				'Pet project. A public web application for quick text analytics. Displays word count, character count, and social media post limits.',
			tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
			imageUrl: wordanalyticsImg,
		},
	],
	ua: [
		{
			title: 'CorpComment',
			description:
				'Pet-проєкт. Full-stack розробка. Користувачі можуть залишати публічні відгуки компаніям.',
			tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
			imageUrl: corpcommentImg,
		},
		{
			title: 'rmtDev',
			description:
				'Pet-проєкт. Дошка оголошень пошуку віддаленої роботи розробників. Front-end розробником, реалізував фільтрацію, сортування та пагінацію.',
			tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
			imageUrl: rmtdevImg,
		},
		{
			title: 'Word Analytics',
			description:
				'Pet-проєкт. Публічний веб-додаток для швидкої аналітики тексту. Показує кількість слів, символів та обмеження для постів у соціальних мережах.',
			tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
			imageUrl: wordanalyticsImg,
		},
	],
}
