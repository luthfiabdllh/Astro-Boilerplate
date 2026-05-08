import { getLocalizedPath } from '@/i18n/utils';

export const footerTranslations = {
  id: {
    'footer.tagline': 'Build Simple. Works Better.',
    'footer.contact_us': 'HUBUNGI KAMI',
    'footer.social_media': 'MEDIA SOSIAL',
    'footer.terms': 'Syarat Layanan',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.rights': 'Seluruh hak cipta dilindungi.',
  },
  en: {
    'footer.tagline': 'Build Simple. Works Better.',
    'footer.contact_us': 'CONTACT US',
    'footer.social_media': 'OUR SOCIAL MEDIA',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export const getFooterLinks = (t: any, lang: string) => ({
  contact: [
    { name: t('footer.contact_us'), url: getLocalizedPath('/#kontak', lang) },
    { name: 'business@novarentech.com', url: 'mailto:business@novarentech.com' },
  ],
  socials: [
    { name: 'Instagram', url: 'https://instagram.com/novaren' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/novaren' },
  ],
  legal: [
    { name: t('footer.terms'), url: getLocalizedPath('/terms', lang) },
    { name: t('footer.privacy'), url: getLocalizedPath('/privacy', lang) },
  ]
});
