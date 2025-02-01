import { Fragment } from 'react'
import { SpotlightCard } from '../../spotlight-card'

export function CICDListEN() {
	return (
		<Fragment>
			<SpotlightCard className='relative select-none max-w-md text-start dark:text-gray-200 text-gray-950'>
				<p className='absolute top-3 right-5 text-2xl'>1</p>
				<h2 className='font-bold text-xl mb-2'>Idea and Design ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• Discussion of business requirements.</li>
					<li>• UX/UI designers create mockups (Figma, Adobe XD).</li>
					<li>• Functional requirements and user stories are defined.</li>
					<li>• Discussion of technical implementation with the team.</li>
				</ul>
				<p>🎯 Outcome:</p>
				<ul>
					<li>• Design mockups.</li>
					<li>• Technical specifications.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>2</p>
				<h2 className='font-bold text-xl mb-2'>Development ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• Development of functionality in a separate feature branch.</li>
					<li>• Code review (Pull Request, Merge Request).</li>
					<li>• Automatic CI process execution (testing, static analysis).</li>
				</ul>
				<p>🎯 Outcome:</p>
				<ul>
					<li>• The final code passes review and is merged into develop or staging.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>3</p>
				<h2 className='font-bold text-xl mb-2'>QA Environment (Testing) ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• Code is automatically deployed to the QA environment.</li>
					<li className='line-through'>
						• Unit tests, integration tests, and end-to-end tests (Jest, Cypress) are executed.
					</li>
					<li>• Manual testing by QA engineers.</li>
					<li>• Bug fixes if necessary.</li>
				</ul>
				<p>🎯 Outcome:</p>
				<ul>
					<li>• QA engineers approve ("OK") or return the code for revision.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>4</p>
				<h2 className='font-bold text-xl mb-2'>Staging (Pre-Production) ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• Code is deployed to staging (pre-prod).</li>
					<li className='line-through'>• Performance and security testing.</li>
					<li>• Final approval from business/product managers.</li>
				</ul>
				<p>🎯 Outcome:</p>
				<ul>
					<li>• Code is ready for production ✅.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>5</p>
				<h2 className='font-bold text-xl mb-2'>Production Deploy ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• Code is deployed to main or master.</li>
					<li>• Automatic deployment to production (AWS, Vercel, DigitalOcean).</li>
					<li>• Service stability check after release (health checks, monitoring).</li>
				</ul>
				<p>🎯 Outcome:</p>
				<ul>
					<li>• Code is live on production! 🚀</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>6</p>
				<h2 className='font-bold text-xl mb-2'>Monitoring and Support ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• Logging and monitoring (Sentry, Datadog).</li>
					<li>• User behavior analysis (PostHog, Google Analytics).</li>
					<li>• Hotfixes in case of critical issues.</li>
				</ul>
				<p>🎯 Outcome:</p>
				<ul>
					<li>• Quick response to issues.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>7</p>
				<h2 className='font-bold text-xl mb-2'>Product Maintenance and Growth ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• User support (customer service).</li>
					<li>• Development of new features, bug fixes.</li>
					<li>• Data analysis, A/B testing implementation.</li>
				</ul>
				<p>🎯 Outcome:</p>
				<ul>
					<li>• The product is evolving and improving.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>8</p>
				<h2 className='font-bold text-xl mb-2'>Automated CI/CD Process ✅</h2>
				<p>Phase:</p>
				<ul>
					<li>• Push to feature-branch → Automatic tests 🚦</li>
					<li>• Merge into develop → Deployment to QA 🌍</li>
					<li>• Merge into staging → Pre-production review 💡</li>
					<li>• Merge into main → Production deployment 🚀</li>
				</ul>
				<p>CI/CD Tools:</p>
				<ul>
					<li>• GitHub Actions / GitLab CI / Jenkins (CI)</li>
					<li className='line-through'>• Docker + Kubernetes (Containerization)</li>
					<li>• AWS, Vercel, DigitalOcean (Deployment)</li>
					<li className='line-through'>• Sentry, Datadog (Monitoring)</li>
				</ul>
			</SpotlightCard>
		</Fragment>
	)
}