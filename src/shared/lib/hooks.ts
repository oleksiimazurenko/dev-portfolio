import { useActiveSectionContext } from '@/shared/context/active-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './types'

export function useSectionInView(sectionName: SectionName) {
	const { ref, inView } = useInView({
		threshold: 0,
		rootMargin: '-50% 0px -50% 0px',
	})

	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		function handleScroll() {
			const scrollPosition = window.scrollY + window.innerHeight
			const pageHeight = document.documentElement.scrollHeight

			if (scrollPosition >= pageHeight - 10) {
				setActiveSection('Contact')
			}
		}

		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName])

	return {
		ref,
	}
}
