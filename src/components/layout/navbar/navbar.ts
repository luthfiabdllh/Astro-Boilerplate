import { Home, Newspaper, HeartPulse, Briefcase, User, MessageCircle } from "lucide-react";
import { getLocalizedPath } from "@/i18n/utils";

export const navbarTranslations = {
  id: {
    "nav.home": "Beranda",
    "nav.articles": "Artikel",
    "nav.services": "Layanan",
    "nav.contact": "Kontak",
    "nav.cta": "Ayo Konsultasi",
    "nav.about": "Tentang Kami",
    "nav.works": "Portfolio",
    "nav.IntermittentCta": "Mulai Percakapan",
    "nav.talk": "Talk",
  },
  en: {
    "nav.home": "Home",
    "nav.articles": "Articles",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",
    "nav.about": "About Us",
    "nav.works": "Works",
    "nav.IntermittentCta": "Start a Conversation",
    "nav.talk": "Talk",
  },
} as const;

export const getNavItems = (t: any, lang: string) => [
  { name: t("nav.home"), url: getLocalizedPath("/", lang), icon: Home },
  { name: t("nav.about"), url: getLocalizedPath("/tentang", lang), icon: User },
  {
    name: t("nav.works"),
    url: getLocalizedPath("/pekerjaan", lang),
    icon: Briefcase,
  },
  {
    name: t("nav.services"),
    url: getLocalizedPath("/#layanan", lang),
    icon: HeartPulse,
  },
  {
    name: t("nav.talk"),
    url: getLocalizedPath("/talk", lang),
    icon: MessageCircle,
  }
];
