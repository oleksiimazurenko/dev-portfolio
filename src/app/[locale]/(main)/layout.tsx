import ActiveSectionContextProvider from '@/shared/context/active-section-context'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<Fragment>
			<ActiveSectionContextProvider>
				<Header />
				{children}
				<Footer />

				<Toaster position='top-right' />
			</ActiveSectionContextProvider>
		</Fragment>
	)
}
