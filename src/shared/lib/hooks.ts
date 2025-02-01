import { useActiveSectionContext } from '@/shared/context/active-section-context'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './types'

export function useSectionInView(sectionName: SectionName) {
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
	const [lastScrollY, setLastScrollY] = useState(0)

	const rootMargin = scrollDirection === "down" ? "-80% 0px -20% 0px" : "-20% 0px -80% 0px"

	const { ref, inView } = useInView({
		threshold: 0,
		rootMargin,
	})

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
			setLastScrollY(currentScrollY)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY])

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName])

	return { ref }
}


export function useBodyWidth() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    
    const debouncedHandleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    }

    const resizeObserver = new ResizeObserver(debouncedHandleResize);
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return width;
}