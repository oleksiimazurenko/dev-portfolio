export default function Page() {
	return (
		<section className='mb-28 max-w-[53rem] w-full scroll-mt-28 text-center sm:mb-40 h-min'>
			<p>
				1. Ідея та дизайн ✅ Фаза: • Обговорення бізнес-вимог. • UX/UI дизайнери
				створюють макети (Figma, Adobe XD). • Визначаються функціональні вимоги,
				user stories. • Обговорення технічної реалізації з командою. 🎯
				Результат: • Макети дизайну. • Технічне завдання.
			</p>

			<p>
				🔍 2. Розробка (Development) ✅ Фаза: • Розробка функціоналу на окремій
				feature-branch. • Використання code review (Pull Request, Merge
				Request). • Автоматичний запуск CI-процесів (тестування, статичний
				аналіз). 🎯 Результат: • Фінальний код проходить рев’ю та мерджиться в
				develop або staging.
			</p>

			<p>
				🔍 3. QA-середовище (Тестування) ✅ Фаза: • Код автоматично деплоїться в
				QA-середовище. • Запускаються юнiт-тести, інтеграційні та end-to-end
				тести (Jest, Cypress). • Ручне тестування QA-інженерами. • Виправлення
				багів, якщо потрібно. 🎯 Результат: • QA-інженери дають “ОК” або
				повертають у розробку.
			</p>

			<p>
				🔍 4. Staging (Передпродакшн-середовище) ✅ Фаза: • Код деплоїться на
				staging (pre-prod). • Запуск перфоманс-тестів, тестування безпеки. •
				Фінальне схвалення від бізнесу / продакт-менеджерів. 🎯 Результат: •
				Готовий до продакшну код ✅.
			</p>

			<p>
				🔍 5. Продакшн (Production Deploy) ✅ Фаза: • Код деплоїться у main або
				master. • Автоматичний деплой у production (AWS, Vercel, DigitalOcean).
				• Перевірка стабільності сервісу після релізу (health checks,
				monitoring). 🎯 Результат: • Код працює на проді! 🚀
			</p>

			<p>
				🔍 6. Моніторинг та підтримка ✅ Фаза: • Логування та моніторинг
				(Sentry, Datadog). • Аналіз поведінки користувачів (PostHog, Google
				Analytics). • Гарячі виправлення (hotfix) у разі критичних багів. 🎯
				Результат: • Швидке реагування на проблеми.
			</p>

			<p>
				🔁 Автоматизований CI/CD процес 1️⃣ Push в feature-branch → Автоматичні
				тести 🚦 2️⃣ Merge в develop → Деплой в QA 🌍 3️⃣ Merge в staging →
				Передпродакшн, перевірка 💡 4️⃣ Merge в main → Деплой у production 🚀 📌
				Інструменти для CI/CD: • GitHub Actions / GitLab CI / Jenkins (CI) •
				Docker + Kubernetes (Containerization) • AWS, Vercel, DigitalOcean
				(Deployment) • Sentry, Datadog (Monitoring)
			</p>
		</section>
	)
}
