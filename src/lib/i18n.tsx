import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const t: Dict = {
  "nav.works": { en: "WORKS", ar: "الأعمال" },
  "nav.about": { en: "ABOUT", ar: "نبذة" },
  "nav.experience": { en: "AWARDS", ar: "الجوائز" },
  "nav.contact": { en: "CONTACTS", ar: "تواصل" },

  "hero.eyebrow": {
    en: "SENIOR FULL STACK ENGINEER",
    ar: "مهندس متكامل أول",
  },
  "hero.name.first": { en: "MOSTAFA", ar: "مصطفى" },
  "hero.name.last": { en: "SAMIR", ar: "سمير" },
  "hero.subtitle": {
    en: "Senior Full Stack Engineer with 4+ years specializing in high-performance .NET 8 Microservices & Next.js Marketplaces.",
    ar: "مهندس متكامل أول بخبرة تزيد عن 4 سنوات، متخصص في الخدمات المصغرة عالية الأداء باستخدام .NET 8 ومنصات التجارة الإلكترونية بـ Next.js.",
  },
  "hero.cta": { en: "LEARN MORE", ar: "اكتشف المزيد" },

  "about.preview.title1": { en: "4+ Years of", ar: "4+ سنوات من" },
  "about.preview.title2": { en: "Full Stack Excellence", ar: "التميز التقني" },
  "about.preview.desc": { 
    en: "Senior Full Stack Engineer specializing in scaling marketplace throughput by 300% using .NET 8, Clean Architecture & Next.js.",
    ar: "مهندس متكامل أول متخصص في زيادة سعة المنصات بنسبة 300% باستخدام .NET 8 و Clean Architecture و Next.js."
  },
  "about.preview.cta": { en: "VIEW CASE", ar: "عرض الحالة" },

  "projects.preview.view": { en: "VIEW PROJECT", ar: "عرض المشروع" },

  "experience.preview.title": { en: "Awards & Recognition", ar: "الجوائز والتكريمات" },
  "experience.preview.cta": { en: "VIEW ALL AWARDS", ar: "عرض جميع الجوائز" },
  "experience.preview.selected": { en: "SELECTED WORKS", ar: "أعمال مختارة" },

  "projects.index.eyebrow": { en: "PORTFOLIO & CASE STUDIES", ar: "أعمال ودراسات حالة" },
  "projects.index.showing": { en: "Showing", ar: "عرض" },
  "projects.index.projectsWord": { en: "projects", ar: "مشروع" },
  "projects.index.page": { en: "page", ar: "صفحة" },
  "projects.card.details": { en: "View details", ar: "عرض التفاصيل" },
  "projects.index.title": { en: "All Projects", ar: "جميع المشاريع" },
  "projects.index.desc": { 
    en: "Marketplaces, .NET 8 microservices, real-time dashboards, and multi-tenant architectures.", 
    ar: "أسواق رقمية، خدمات مصغرة بـ .NET 8، لوحات تحكم لحظية، وهياكل متعددة المستأجرين." 
  },
  "projects.index.search": { en: "Search projects", ar: "البحث في المشاريع" },
  "projects.index.searchPlaceholder": { en: "Search by name, tech, client...", ar: "ابحث بالاسم، التقنية، العميل..." },
  "projects.index.clear": { en: "Clear search", ar: "مسح البحث" },
  "projects.index.sort": { en: "Sort projects", ar: "فرز المشاريع" },
  "projects.index.featured": { en: "Featured", ar: "مميز" },
  "projects.index.newest": { en: "Newest", ar: "الأحدث" },
  "projects.index.oldest": { en: "Oldest", ar: "الأقدم" },
  "projects.index.grid": { en: "Grid view", ar: "عرض شبكي" },
  "projects.index.list": { en: "List view", ar: "عرض قائمة" },

  "project.detail.back": { en: "Back to all projects", ar: "العودة لجميع المشاريع" },
  "project.detail.arch": { en: "Architecture & Tech", ar: "المعمارية والتقنيات" },
  "project.detail.brief": { en: "Project Brief", ar: "ملخص المشروع" },
  "project.detail.client": { en: "Client", ar: "العميل" },
  "project.detail.db": { en: "Database Engine", ar: "قاعدة البيانات" },
  "project.detail.status": { en: "Launch Status", ar: "حالة الإطلاق" },
  "project.detail.status.live": { en: "Live in Production", ar: "يعمل في الإنتاج" },
  "project.detail.status.local": { en: "Archived / Local", ar: "مؤرشف / محلي" },
  "project.detail.visit": { en: "Visit Live Site", ar: "زيارة الموقع الحي" },
  "project.detail.source": { en: "View Source Code", ar: "عرض الشفرة المصدرية" },
  "project.detail.continue": { en: "Continue Exploring", ar: "واصل الاستكشاف" },
  "project.detail.prev": { en: "PREVIOUS PROJECT", ar: "المشروع السابق" },
  "project.detail.next": { en: "NEXT PROJECT", ar: "المشروع التالي" },
  
  "project.notFound.title": { en: "Project Not Found", ar: "المشروع غير موجود" },
  "project.notFound.back": { en: "Back to Projects", ar: "العودة للمشاريع" },

  "contact.title": { en: "Let's Build Something", ar: "لنبنِ شيئاً معاً" },
  "contact.subtitle": {
    en: "Have a marketplace idea or a system that needs to scale? Drop a line.",
    ar: "لديك فكرة سوق رقمي أو نظام يحتاج للتوسّع؟ راسلني.",
  },
  "contact.name": { en: "Name", ar: "الاسم" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.success": {
    en: "Message sent — I'll get back to you soon!",
    ar: "تم إرسال الرسالة — سأعود إليك قريباً!",
  },

  "welcome.eyebrow": { en: "Welcome aboard", ar: "أهلاً بك" },
  "welcome.title": {
    en: "Great systems start with one conversation.",
    ar: "الأنظمة العظيمة تبدأ بمحادثة واحدة.",
  },
  "welcome.body": {
    en: "You've spent a minute here — so let me be direct. I design marketplace platforms that stay fast under real traffic, real vendors and real money: .NET 8 microservices, tuned databases and architecture that survives growth instead of collapsing under it.",
    ar: "قضيت دقيقة هنا — فدعني أكون مباشراً. أصمم منصات تجارة إلكترونية تبقى سريعة تحت ضغط حقيقي من الزوار والبائعين والمعاملات: خدمات مصغّرة على .NET 8، قواعد بيانات محسّنة، ومعمارية تنمو بدل أن تنهار.",
  },
  "welcome.highlight": {
    en: "If your platform has to scale, it should be built right the first time.",
    ar: "إذا كانت منصتك مطالبة بالتوسّع، فيجب بناؤها بشكل صحيح من المرة الأولى.",
  },
  "welcome.primary": { en: "Start a conversation", ar: "ابدأ محادثة" },
  "welcome.secondary": { en: "See the work first", ar: "شاهد الأعمال أولاً" },
  "welcome.footnote": {
    en: "No forms, no pressure — just a reply within 24 hours.",
    ar: "بلا ضغط — رد خلال 24 ساعة.",
  },
  "welcome.close": { en: "Close welcome message", ar: "إغلاق رسالة الترحيب" },

  "footer.headline1": { en: "You can find", ar: "يمكنك أن تجدني" },
  "footer.headline2": { en: "me here:", ar: "هنا:" },
  "footer.rights": { en: "ALL RIGHTS RESERVED", ar: "جميع الحقوق محفوظة" },
  "footer.copyright": { en: "2024 | COPYRIGHT", ar: "2024 | حقوق النشر" },

  "project.detail.backAll": { en: "Back to all projects", ar: "العودة إلى كل المشاريع" },

  "events.title": { en: "Conferences & Events", ar: "المؤتمرات والفعاليات" },
  "events.tab.interviews": { en: "INTERVIEWS", ar: "مقابلات" },
  "events.tab.talks": { en: "TALKS", ar: "محاضرات" },
  "events.tab.exhibition": { en: "EXHIBITION", ar: "معارض" },

  "common.theme": { en: "Toggle theme", ar: "تبديل المظهر" },
  "common.language": { en: "Toggle language", ar: "تبديل اللغة" },
  "common.menu": { en: "Menu", ar: "القائمة" },
  "common.home": { en: "Home", ar: "الرئيسية" },
};

interface I18nContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  isRTL: boolean;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  tr: (key: keyof typeof t | string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = "lang";

/** Runs before hydration so the first paint already has the right lang/dir. */
export const langBootstrapScript = `(function(){try{var l=localStorage.getItem("${STORAGE_KEY}");if(l!=="ar"&&l!=="en"){l=(navigator.language||"en").toLowerCase().indexOf("ar")===0?"ar":"en";}var r=document.documentElement;r.lang=l;r.dir=l==="ar"?"rtl":"ltr";}catch(e){}})();`;

function readInitialLang(): Lang {
  if (typeof document === "undefined") return "en";
  return document.documentElement.lang === "ar" ? "ar" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // SSR renders "en"; the bootstrap script already set <html lang/dir>, and this
  // effect syncs React state right after hydration (no mismatch warnings).
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    setLang(stored === "ar" || stored === "en" ? stored : readInitialLang());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const tr = (key: string) => t[key]?.[lang] ?? key;
  const dir = lang === "ar" ? ("rtl" as const) : ("ltr" as const);

  return (
    <I18nContext.Provider value={{ lang, dir, isRTL: dir === "rtl", setLang, toggleLang, tr }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
