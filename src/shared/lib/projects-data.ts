import corpcommentImg from '@base/public/corp-comment.png'
import rmtdevImg from '@base/public/rmt-dev.png'
import wordanalyticsImg from '@base/public/word-analytics.png'
import petsoftImg from '@base/public/pet-soft.png'
import eventoImg from '@base/public/evento.png'
import { StaticImageData } from 'next/image'

export type ProjectDataType = {
	title: string
	description: string
	tags: string[]
	imageUrl: StaticImageData
	url: string
}

export const projectsData = {
	en: [
		{
			title: 'CorpComment',
			description:
				'Pet project. Full-stack development. Users can leave public feedback for companies.',
			tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
			url: 'https://corp-comment-nine.vercel.app/',
			imageUrl: corpcommentImg,
		},
		{
			title: 'rmtDev',
			description:
				'Pet project. Job board for remote developer job searches. Worked as a front-end developer, implemented filtering, sorting, and pagination.',
			tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
			url: 'https://rmt-dev-wine.vercel.app/',
			imageUrl: rmtdevImg,
		},
		{
			title: 'Word Analytics',
			description:
				'Pet project. A public web application for quick text analytics. Displays word count, character count, and social media post limits.',
			tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
			url: 'https://word-analytics-dusky.vercel.app/',
			imageUrl: wordanalyticsImg,
		},
		{
			title: 'Pet Soft',
			description:
				'Pet project. Full-stack development. An e-commerce platform for pet products.',
			tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer', 'Radix UI', 'Prisma', 'Zod'],
			url: 'https://petsoft-iota-jet.vercel.app/',
			imageUrl: petsoftImg,
		},
		{
			title: 'Evento',
			description:
				'Pet project. Full-stack development. A platform for creating and managing events.',
			tags: ['React', 'Next.js', 'Prisma', 'Tailwind', 'Radix UI', 'Framer', 'SQL'],
			url: 'https://evento-chi-one.vercel.app/events/austin',
			imageUrl: eventoImg,
		},
	],
	ua: [
		{
			title: 'CorpComment',
			description:
				'Pet-проєкт. Full-stack розробка. Користувачі можуть залишати публічні відгуки компаніям.',
			tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
			url: 'https://corp-comment-nine.vercel.app/',
			imageUrl: corpcommentImg,
		},
		{
			title: 'rmtDev',
			description:
				'Pet-проєкт. Дошка оголошень пошуку віддаленої роботи розробників. Front-end розробником, реалізував фільтрацію, сортування та пагінацію.',
			tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
			url: 'https://rmt-dev-wine.vercel.app/',
			imageUrl: rmtdevImg,
		},
		{
			title: 'Word Analytics',
			description:
				'Pet-проєкт. Публічний веб-додаток для швидкої аналітики тексту. Показує кількість слів, символів та обмеження для постів у соціальних мережах.',
			tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer', 'TypeScript'],
			url: 'https://word-analytics-dusky.vercel.app/',
			imageUrl: wordanalyticsImg,
		},
		{
			"title": "Pet Soft",
			"description": "Pet-проєкт. Full-stack розробка. Платформа електронної комерції для продуктів для тварин.",
			"tags": ["React", "Next.js", "SQL", "Tailwind", "Framer", "Radix UI", "Prisma", "Zod", 'TypeScript'],
			"url": "https://petsoft-iota-jet.vercel.app/",
			"imageUrl": petsoftImg
		},
		{
			"title": "Evento",
			"description": "Pet-проєкт. Full-stack розробка. Платформа для створення та управління подіями.",
			"tags": ["React", "Next.js", "Prisma", "Tailwind", "Radix UI", "Framer", "SQL", 'TypeScript'],
			"url": "https://evento-chi-one.vercel.app/events/austin",
			"imageUrl": eventoImg
		}
	],
}
