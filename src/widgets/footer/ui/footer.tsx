'use client'

import { useTranslations } from 'next-intl'
import React from "react";

export function Footer() {
    const t = useTranslations('Footer')

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 {' '}{t('owner')}. {t('all_rights_reserved')}.
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t('about_this_website')}:</span> {t('built_with')}{" "}
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
