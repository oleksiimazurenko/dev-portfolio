'use client'

import { useActiveSectionContext } from '@/shared/context/active-section-context'
import { links } from '@/shared/lib/data'
import { Link } from '@base/src/shared/i18n/routing'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()
	const t = useTranslations('Navbar')

	return (
		<header className='z-[99] relative w-max'>
			<motion.div
				className='fixed top-0 left-1/2 w-full sm:w-max rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full dark:bg-gray-950/80 dark:border-black/40 dark:bg-opacity-75'
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			>
				<nav className='flex justify-center items-center p-2'>
					<ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
						{links.map(link => (
							<motion.li
								className='h-3/4 flex items-center justify-center relative w-max'
								key={link.hash}
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
							>
								<Link
									className={clsx(
										'flex w-full items-center justify-center p-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
										{
											'text-gray-950 dark:text-gray-200':
												activeSection === link.name,
										}
									)}
									href={link.hash}
									onClick={() => {
										setActiveSection(link.name)
										setTimeOfLastClick(Date.now())
									}}
								>
									{t(link.name)}

									{link.name === activeSection && (
										<motion.span
											className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
											layoutId='activeSection'
											transition={{
												type: 'spring',
												stiffness: 380,
												damping: 30,
											}}
										></motion.span>
									)}
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
			</motion.div>
		</header>
	)
}
