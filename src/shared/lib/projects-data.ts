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
				'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
			tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
			imageUrl: corpcommentImg,
		},
		{
			title: 'rmtDev',
			description:
				'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
			tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
			imageUrl: rmtdevImg,
		},
		{
			title: 'Word Analytics',
			description:
				'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
			tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
			imageUrl: wordanalyticsImg,
		},
	],
	ua: [
		{
			title: 'CorpComment',
			description:
				'Я працював full-stack розробником над цим стартап-проєктом протягом 2 років. Користувачі можуть залишати публічні відгуки компаніям.',
			tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
			imageUrl: corpcommentImg,
		},
		{
			title: 'rmtDev',
			description:
				'Дошка оголошень для віддаленої роботи розробників. Працював front-end розробником, реалізував фільтрацію, сортування та пагінацію.',
			tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
			imageUrl: rmtdevImg,
		},
		{
			title: 'Word Analytics',
			description:
				'Публічний веб-додаток для швидкої аналітики тексту. Показує кількість слів, символів та обмеження для постів у соціальних мережах.',
			tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
			imageUrl: wordanalyticsImg,
		},
	]
}
