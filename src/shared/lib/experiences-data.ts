import React from 'react'
import { LuGraduationCap } from 'react-icons/lu'
import { MdBuild } from 'react-icons/md'

export const experiencesData = {
	en: [
		{
			title: 'Leamon School (HTML and CSS | Rostyslav Suslov)',
			location: 'Kharkiv, UK',
			link: 'https://lemon.school/',
			description:
				'After three months of learning how to build websites the traditional way, I went freelance.',
			icon: React.createElement(LuGraduationCap),
			date: '2022.06 - 2022.08',
		},
		{
			title: 'Leamon School (JS | Ivan Yurkevich)',
			location: 'Kharkiv, UK',
			link: 'https://lemon.school/',
			description:
				'Working as a freelancer to create business card websites, I began to understand that CSS and HTML alone are not enough. I decided to learn JavaScript.',
			icon: React.createElement(LuGraduationCap),
			date: '2022.09 - 2022.11',
		},
		{
			title:
				'Udemy (The Complete JavaScript Course + React + Redux | Ivan Petrechenko)',
			location: 'Remote study, UK',
			link: 'https://www.udemy.com/course/javascript_full/',
			description:
				'Still working as a freelancer, I started creating more complex websites with interactivity using traditional methods. I realized that CSS, HTML, and JavaScript are not enough and decided to continue learning.',
			icon: React.createElement(LuGraduationCap),
			date: '2022.11 - 2023.02',
		},
		{
			title: 'Udemy (Practical JavaScript | Ivan Petrechenko)',
			location: 'Remote study, UK',
			link: 'https://www.udemy.com/course/javascript_practice/',
			description:
				'As a freelancer, I realized I was doing simple tasks that anyone could do, and I wanted to work on more complex projects. I decided to continue studying.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.02 - 2023.03',
		},
		{
			title: 'Udemy (CMS WordPress | Ivan Petrechenko)',
			location: 'Remote study, UK',
			link: 'https://www.udemy.com/course/cms-wordpress/',
			description:
				'I was working as a freelancer but lacked knowledge of content management systems, so I decided to take the course.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.03 - 2023.04',
		},
		{
			title: 'Campfire School (TypeScript | Ivan Petrechenko)',
			location: 'Remote study, UK',
			link: 'https://campfire-school.com/courses/polnyy-kurs-po-typescript-react',
			description: 'I needed typing for my projects.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.04 - 2023.05',
		},
		{
			title: 'Udemy (NextJS | Anton Larychev)',
			location: 'Remote study, RU',
			link: 'https://www.udemy.com/course/react-nextjs/',
			description:
				'I stopped working as a freelancer and left traditional website development. I decided to fully switch to React. However, React alone was not enough to complete projects, so I transitioned to Next.js.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.05 - 2023.12',
		},
		{
			title: 'ByteGrad (Professional React & Next.js | ByteGrad by Wesley)',
			location: 'Remote study, USA',
			link: 'https://bytegrad.com/courses/professional-react-nextjs',
			description: 'I continue to deepen my knowledge of Next.js.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.12 - 2024.09',
		},
		{
			title: 'Landee',
			location: 'Remote job, UA',
			link: '',
			description:
				'MVP website constructor. Developed from scratch on Next.js (App Router), including integration with MongoDB Atlas through Prisma, CRON tasks setup on Vercel, FSD architecture, Drag-and-Drop (hello-pangea/dnd), TailwindCSS, GSAP animations, Visx graphs, custom analytics, third-party API integrations, SEO (sitemaps, robots.txt), ShadCN components, React component optimization, and CI/CD.',
			icon: React.createElement(MdBuild),
			date: '2023.12 - 2024.09',
		},
		{
			title: 'NDA project (NextJS | Directus)',
			location: 'Remote job, UA',
			link: '',
			description:
				'Working with Next.js (transition from Pages Router to App Router, FSD), improving UX and SEO (sitemaps, robots.txt, meta tags, JSON-LD, canonical, image attributes), configuring Directus CMS and CRON Tasks, and conducting code reviews for junior developers. Emphasis on improving architecture, creating user-friendly interfaces, and analytics.',
			icon: React.createElement(MdBuild),
			date: '2024.09 - present',
		},
	] as const,
	ua: [
		{
			title: 'Leamon School (HTML та CSS | Ростислав Суслов)',
			location: 'Харків, Україна',
			link: 'https://lemon.school/',
			description:
				'Після трьох місяців навчання створенню вебсайтів традиційним способом, я перейшов до фрілансу.',
			icon: React.createElement(LuGraduationCap),
			date: '2022.06 - 2022.08',
		},
		{
			title: 'Leamon School (JS | Іван Юркевич)',
			location: 'Харків, Україна',
			link: 'https://lemon.school/',
			description:
				'Працюючи фрілансером над створенням сайтів-візиток, я почав розуміти, що лише HTML та CSS недостатньо. Було вирішено вивчати JavaScript.',
			icon: React.createElement(LuGraduationCap),
			date: '2022.09 - 2022.11',
		},
		{
			title:
				'Udemy (Повний курс з JavaScript + React + Redux | Іван Петреченко)',
			location: 'Дистанційне навчання, Україна',
			link: 'https://www.udemy.com/course/javascript_full/',
			description:
				'Все ще працюючи фрілансером, але вже створюючи складніші сайти з інтерактивністю (традиційними методами), я зрозумів, що знання HTML, CSS і JavaScript обмежені. Було прийнято рішення йти далі у навчанні.',
			icon: React.createElement(LuGraduationCap),
			date: '2022.11 - 2023.02',
		},
		{
			title: 'Udemy (Практичний JavaScript | Іван Петреченко)',
			location: 'Дистанційне навчання, Україна',
			link: 'https://www.udemy.com/course/javascript_practice/',
			description:
				'Я все ще працюю фрілансером і розумію, що роблю прості речі, які можуть зробити всі. Хочу займатися складнішими проектами, тому продовжую навчання.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.02 - 2023.03',
		},
		{
			title: 'Udemy (CMS WordPress | Іван Петреченко)',
			location: 'Дистанційне навчання, Україна',
			link: 'https://www.udemy.com/course/cms-wordpress/',
			description:
				'Я також працюю фрілансером. Не мав знань щодо систем управління контентом, тому пішов на курс.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.03 - 2023.04',
		},
		{
			title: 'Campfire School (TypeScript | Іван Петреченко)',
			location: 'Дистанційне навчання, Україна',
			link: 'https://campfire-school.com/courses/polnyy-kurs-po-typescript-react',
			description: 'Для проектів мені потрібна типізація.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.04 - 2023.05',
		},
		{
			title: 'Udemy (NextJS | Антон Ларичев)',
			location: 'Дистанційне навчання, Україна',
			link: 'https://www.udemy.com/course/react-nextjs/',
			description:
				'Я більше не працюю фрілансером. Залишив традиційну розробку сайтів. Вирішив повністю перейти на React. Але React недостатньо для завершення проектів, тому перейшов на Next.js.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.05 - 2023.12',
		},
		{
			title: 'ByteGrad (Професійний React та Next.js | ByteGrad by Wesley)',
			location: 'Дистанційне навчання, США',
			link: 'https://bytegrad.com/courses/professional-react-nextjs',
			description: 'Продовжую вдосконалювати знання в Next.js.',
			icon: React.createElement(LuGraduationCap),
			date: '2023.12 - 2024.09',
		},
		{
			title: 'Landee',
			location: 'Дистанційна робота, Україна',
			link: '',
			description:
				'MVP конструктор сайтів. Розробка з нуля на Next.js (App Router), включаючи інтеграцію MongoDB Atlas через Prisma, налаштування CRON на Vercel, FSD-архітектуру, Drag-and-Drop (hello-pangea/dnd), TailwindCSS, GSAP-анімації, Visx-графіки, власну аналітику, інтеграцію сторонніх API, SEO (sitemaps, robots.txt), ShadCN компоненти, оптимізацію React-компонентів та CI/CD.',
			icon: React.createElement(MdBuild),
			date: '2023.12 - 2024.09',
		},
		{
			title: 'Проект NDA (NextJS | Directus)',
			location: 'Дистанційна робота, Україна',
			link: '',
			description:
				'Робота з Next.js (перехід з Pages Router на App Router, FSD), поліпшення UX і SEO (sitemaps, robots.txt, метатеги, JSON-LD, canonical, атрибути зображень), налаштування Directus CMS і CRON Tasks, code review молодших розробників. Наголос на покращенні архітектури, user-friendly інтерфейсах та аналітиці. Робота в команді.',
			icon: React.createElement(MdBuild),
			date: '2024.09 - зараз',
		},
	] as const,
}
