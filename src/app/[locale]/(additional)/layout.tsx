'use client'

import { Footer } from '@/widgets/footer'
import { Link } from '@base/src/shared/i18n/routing'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Fragment } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {

	const locale = useLocale()

	return (
		<Fragment>
			<header className='z-[99] relative w-max'>
				<motion.div
					className='fixed top-0 left-1/2 w-full sm:w-max rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full dark:bg-gray-950/80 dark:border-black/40 dark:bg-opacity-75'
					initial={{ y: -100, x: '-50%', opacity: 0 }}
					animate={{ y: 0, x: '-50%', opacity: 1 }}
				>
					<nav className='flex justify-center items-center p-2'>
						<ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
							<motion.li
								className='h-3/4 flex items-center justify-center relative w-max'
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
							>
								<Link
									className={clsx(
										'flex w-full items-center justify-center p-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300'
									)}
									href='/'
								>
									{locale === 'en' ? 'Home' : 'Головна'}

									<motion.span
										className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
										layoutId='activeSection'
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								</Link>
							</motion.li>
						</ul>
					</nav>
				</motion.div>
			</header>
			{children}
			<Footer />
		</Fragment>
	)
}
