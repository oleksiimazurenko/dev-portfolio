import { CICDListEN, CICDListUA } from '@base/src/entities/ci-cd-list'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export const revalidate = 5000000

type Props = {
	params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'cicd' })
	return (
		<section className='mb-28 mx-auto w-full scroll-mt-28 text-center sm:mb-40 h-min min-h-screen flex justify-center items-start gap-4 px-4 flex-col'>
			<h1 className='sm:text-2xl text-xl text-gray-950 dark:text-gray-50 absolute top-17 w-max sm:top-24 left-1/2 transform -translate-x-1/2'>
				{t('title')}
			</h1>

			<Image
				src='/cicd.webp'
				alt='cicd'
				width={350}
				height={350}
				className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:rotate-90 hover:scale-[0.70] transition-all duration-800'
			/>

			<div className='flex flex-wrap gap-4 w-full justify-center'>
				{locale === 'en' ? <CICDListEN /> : <CICDListUA />}
			</div>
		</section>
	)
}
