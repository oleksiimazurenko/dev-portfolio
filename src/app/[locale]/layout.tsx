import { ThemeSwitch } from '@/features/theme-switch'
import ThemeContextProvider from '@/shared/context/theme-context'
import { routing } from '@/shared/i18n/routing'
import { LocaleSwitch } from '@base/src/features/locale-switch'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { Andika } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

const andika = Andika({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '700'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params

	const t = await getTranslations({ locale, namespace: 'Metadata' })

	return {
		title: t('title'),
		description: t('description'),
	}
}

export const revalidate = 5000000

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params

	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} className='!scroll-smooth'>
			<body
				className={`${andika.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<NextIntlClientProvider messages={messages}>
					<div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]' />
					<div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]' />

					<ThemeContextProvider>
						{children}

						<ThemeSwitch />
						<LocaleSwitch />
					</ThemeContextProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
