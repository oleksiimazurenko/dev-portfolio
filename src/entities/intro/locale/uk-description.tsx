import { Fragment } from 'react'

export function UKDescription() {
	return (
		<Fragment>
			<span className='font-bold'>Привіт, я Олексій.</span> Я{' '}
			<span className='font-bold'>full-stack розробник</span> з{' '}
			<span className='font-bold'>3-річним</span> досвідом. Мені подобається
			створювати <span className='italic'>сайти та додатки</span>. 
			<br />
			Мій основний напрямок — TypeScript (JS).
			<span>
				<br />
				Але наразі працюю в екосистемі
				<br />
				(React | Next.js з Headless CMS)
			</span>
		</Fragment>
	)
}
