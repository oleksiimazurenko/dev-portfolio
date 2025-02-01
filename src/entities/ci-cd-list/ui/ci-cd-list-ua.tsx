import { Fragment } from 'react'
import { SpotlightCard } from '../../spotlight-card'

export function CICDListUA() {
	return (
		<Fragment>
			<SpotlightCard className='relative select-none max-w-md text-start dark:text-gray-200 text-gray-950'>
				<p className='absolute top-3 right-5 text-2xl'>1</p>
				<h2 className='font-bold text-xl mb-2'>Ідея та дизайн ✅</h2>
				<p>Фаза: </p>
				<ul>
					<li>• Обговорення бізнес-вимог.</li>
					<li>• UX/UI дизайнери створюють макети (Figma, Adobe XD).</li>
					<li>• Визначаються функціональні вимоги, user stories.</li>
					<li>• Обговорення технічної реалізації з командою.</li>
				</ul>
				<p>🎯 Результат:</p>
				<ul>
					<li>• Макети дизайну.</li>
					<li>• Технічне завдання.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>2</p>
				<h2 className='font-bold text-xl mb-2'>Розробка (Development) ✅</h2>
				<p>Фаза:</p>
				<ul>
					<li>• Розробка функціоналу на окремій feature-branch.</li>
					<li>• Використання code review (Pull Request, Merge Request).</li>
					<li>
						• Автоматичний запуск CI-процесів (тестування, статичний аналіз).
					</li>
				</ul>
				<p>🎯 Результат:</p>
				<ul>
					<li>
						• Фінальний код проходить рев’ю та мерджиться в develop або staging.
					</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>3</p>
				<h2 className='font-bold text-xl mb-2'>
					QA-середовище (Тестування) ✅
				</h2>
				<p>Фаза:</p>
				<ul>
					<li>• Код автоматично деплоїться в QA-середовище.</li>
					<li className='line-through'>
						• Запускаються юнiт-тести, інтеграційні та end-to-end тести (Jest,
						Cypress).
					</li>
					<li>• Ручне тестування QA-інженерами.</li>
					<li>• Виправлення багів, якщо потрібно.</li>
				</ul>
				<p>🎯 Результат:</p>
				<ul>
					<li>• QA-інженери дають “ОК” або повертають у розробку.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>4</p>
				<h2 className='font-bold text-xl mb-2'>
					Staging (Передпродакшн-середовище) ✅
				</h2>
				<p>Фаза:</p>
				<ul>
					<li>• Код деплоїться на staging (pre-prod).</li>
					<li className='line-through'>
						• Запуск перфоманс-тестів, тестування безпеки.
					</li>
					<li>• Фінальне схвалення від бізнесу / продакт-менеджерів.</li>
				</ul>
				<p>🎯 Результат:</p>
				<ul>
					<li>• Готовий до продакшну код ✅.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>5</p>
				<h2 className='font-bold text-xl mb-2'>
					Продакшн (Production Deploy) ✅
				</h2>
				<p>Фаза:</p>
				<ul>
					<li>• Код деплоїться у main або master.</li>
					<li>
						• Автоматичний деплой у production (AWS, Vercel, DigitalOcean).
					</li>
					<li>
						• Перевірка стабільності сервісу після релізу (health checks,
						monitoring).
					</li>
				</ul>
				<p>🎯 Результат:</p>
				<ul>
					<li>• Код працює на проді! 🚀</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>6</p>
				<h2 className='font-bold text-xl mb-2'>Моніторинг та підтримка ✅</h2>
				<p>Фаза:</p>
				<ul>
					<li>• Логування та моніторинг (Sentry, Datadog).</li>
					<li>• Аналіз поведінки користувачів (PostHog, Google Analytics).</li>
					<li>• Гарячі виправлення (hotfix) у разі критичних багів.</li>
				</ul>
				<p>🎯 Результат:</p>
				<ul>
					<li>• Швидке реагування на проблеми.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>7</p>
				<h2 className='font-bold text-xl mb-2'>
					Підтримка та розвиток продукту ✅
				</h2>
				<p>Фаза:</p>
				<ul>
					<li>• Підтримка користувачів (служба підтримки).</li>
					<li>• Розробка нового функціоналу, виправлення багів.</li>
					<li>• Аналіз даних, впровадження A/B тестів.</li>
				</ul>
				<p>🎯 Результат:</p>
				<ul>
					<li>• Продукт живе та розвивається.</li>
				</ul>
			</SpotlightCard>

			<SpotlightCard className='relative select-none max-w-md text-start'>
				<p className='absolute top-3 right-5 text-2xl'>8</p>
				<h2 className='font-bold text-xl mb-2'>
					Автоматизований CI/CD процес ✅
				</h2>
				<p>Фаза:</p>
				<ul>
					<li>• Push в feature-branch → Автоматичні тести 🚦</li>
					<li>• Merge в develop → Деплой в QA 🌍</li>
					<li>• Merge в staging → Передпродакшн, перевірка 💡</li>
					<li>• Merge в main → Деплой у production 🚀</li>
				</ul>
				<p>Інструменти для CI/CD:</p>
				<ul>
					<li>• GitHub Actions / GitLab CI / Jenkins (CI)</li>
					<li className='line-through'>
						• Docker + Kubernetes (Containerization)
					</li>
					<li>• AWS, Vercel, DigitalOcean (Deployment)</li>
					<li className='line-through'>• Sentry, Datadog (Monitoring)</li>
				</ul>
			</SpotlightCard>
		</Fragment>
	)
}
