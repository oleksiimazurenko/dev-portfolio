import corpcommentImg from '@base/public/corpcomment.png'
import rmtdevImg from '@base/public/rmtdev.png'
import wordanalyticsImg from '@base/public/wordanalytics.png'
import React from 'react'
import { LuGraduationCap } from 'react-icons/lu'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Leamon School (HTML and CSS | Ростислав Суслов)',
		location: 'Kharkiv, UK',
		link: 'https://lemon.school/',
		description:
			'After three months of learning how to build websites the traditional way, I went freelance',
		icon: React.createElement(LuGraduationCap),
		date: '2022.06 - 2022.08',
	},
	{
		title: 'Leamon School (JS | Иван Юркевич)',
		location: 'Kharkiv, UK',
		link: 'https://lemon.school/',
		description:
			'Working as a freelancer to create business card websites, I am beginning to understand that you can’t do much with the help of CSS and HTML. It was decided to go learn Java Script.',
		icon: React.createElement(LuGraduationCap),
		date: '2022.09 - 2022.11',
	},
	{
		title:
			'Udemy (The Complete JavaScript Course + React + Redux | Иван Петреченко)',
		location: 'Remote study, UK',
		link: 'https://www.udemy.com/course/javascript_full/',
		description:
			'Still working as a freelancer, but already making more complex sites with interactivity (traditional methods), I am beginning to understand that CSS, HTML, Java Script are very little. Again the decision was made to go further to study.',
		icon: React.createElement(LuGraduationCap),
		date: '2022.11 - 2023.02',
	},
	{
		title: 'Udemy (Practical Java Script | Иван Петреченко)',
		location: 'Remote study, UK',
		link: 'https://www.udemy.com/course/javascript_practice/',
		description:
			'I also work as a freelancer, I understand that I do simple things that everyone can do, I want to do something more complex. Again the decision was made to continue studying.',
		icon: React.createElement(LuGraduationCap),
		date: '2023.02 - 2023.03',
	},
	{
		title: 'Udemy (CMS WordPress | Иван Петреченко)',
		location: 'Remote study, UK',
		link: 'https://www.udemy.com/course/cms-wordpress/',
		description:
			'I also work as a freelancer. No knowledge of content management systems. I went to the course.',
		icon: React.createElement(LuGraduationCap),
		date: '2023.03 - 2023.04',
	},
	{
		title: 'Campfire School (Type Script | Иван Петреченко)',
		location: 'Remote study, UK',
		link: 'https://campfire-school.com/courses/polnyy-kurs-po-typescript-react',
		description: 'I need typing in projects',
		icon: React.createElement(LuGraduationCap),
		date: '2023.04 - 2023.05',
	},
	{
		title: 'Udemy (Next JS | Антон Ларичев)',
		location: 'Remote study, RU',
		link: 'https://www.udemy.com/course/react-nextjs/',
		description:
			'I no longer work as a freelancer. Left traditional website development. I decided to completely switch to React. But React is not enough to close projects. I switch to Next.js',
		icon: React.createElement(LuGraduationCap),
		date: '2023.05 - 2023.12',
	},
	{
		title: 'ByteGrad (Professional R & N | ByteGrad by Wesley)',
		location: 'Remote study, USA',
		link: 'https://bytegrad.com/courses/professional-react-nextjs',
		description: 'I continue to improve Next.js',
		icon: React.createElement(LuGraduationCap),
		date: '2023.12 - present',
	},
] as const

export const projectsData = [
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
] as const

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Git',
	'Tailwind',
	'Prisma',
	'Redux',
	'GraphQL',
	'PostgreSQL',
	'Framer Motion',
	'React Hook Form',
	'Zod',
	'SQLite',
] as const
