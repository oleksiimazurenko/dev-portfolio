import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ReactNode, RefObject, useEffect, useMemo, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

type ScrollRevealProps = {
	// children: ReactNode
	scrollContainerRef?: RefObject<HTMLElement>
	enableBlur?: boolean
	baseOpacity?: number
	baseRotation?: number
	blurStrength?: number
	containerClassName?: string
	textClassName?: string
	rotationEnd?: string
	wordAnimationEnd?: string
	uniqueSkills: string[]
	skillColors: Record<string, string>
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
	scrollContainerRef,
	enableBlur = true,
	baseOpacity = 0.1,
	baseRotation = 3,
	blurStrength = 4,
	containerClassName = '',
	textClassName = '',
	rotationEnd = 'bottom bottom',
	wordAnimationEnd = 'bottom bottom',
	uniqueSkills,
	skillColors,
}) => {
	const containerRef = useRef<HTMLHeadingElement>(null)

	const splitText = useMemo(() => {
		return uniqueSkills.map(skill => (
			<span
				key={skill}
				style={{
					backgroundColor: skillColors[skill] || '#FFFFFF', // Колір тексту відповідно до технології
					padding: '2px 12px'
				}}
				className='word inline-block text-white rounded-md'
			>
				{skill}
			</span>
		))
	}, [])

	useEffect(() => {
		const el = containerRef.current
		if (!el) return

		const scroller =
			scrollContainerRef && scrollContainerRef.current
				? scrollContainerRef.current
				: window

		gsap.fromTo(
			el,
			{ transformOrigin: '0% 50%', rotate: baseRotation },
			{
				ease: 'none',
				rotate: 0,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: 'top bottom',
					end: rotationEnd,
					scrub: true,
				},
			}
		)

		const wordElements = el.querySelectorAll<HTMLElement>('.word')

		gsap.fromTo(
			wordElements,
			{ opacity: baseOpacity, willChange: 'opacity' },
			{
				ease: 'none',
				opacity: 1,
				stagger: 0.05,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: 'top bottom-=20%',
					end: wordAnimationEnd,
					scrub: true,
				},
			}
		)

		if (enableBlur) {
			gsap.fromTo(
				wordElements,
				{ filter: `blur(${blurStrength}px)` },
				{
					ease: 'none',
					filter: 'blur(0px)',
					stagger: 0.05,
					scrollTrigger: {
						trigger: el,
						scroller,
						start: 'top bottom-=20%',
						end: wordAnimationEnd,
						scrub: true,
					},
				}
			)
		}

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [
		scrollContainerRef,
		enableBlur,
		baseRotation,
		baseOpacity,
		rotationEnd,
		wordAnimationEnd,
		blurStrength,
	])

	return (
		<h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
			<p
				className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold flex justify-center items-center flex-wrap gap-2 ${textClassName}`}
			>
				{splitText}
			</p>
		</h2>
	)
}
