import en from '../locales/en.json';
import ja from '../locales/ja.json';
import ko from '../locales/ko.json';
import zh from '../locales/zh.json';

const locales: Record<string, Record<string, string>> = { en, ja, ko, zh };

export function tr(key: string, lang: string): string {
  return locales[lang]?.[key] || locales['en'][key] || key;
}

export function detectLanguage(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('ui-lang');
    if (saved && ['en', 'ja', 'ko', 'zh'].includes(saved)) return saved;
  }
  if (typeof navigator === 'undefined') return 'en';
  const l = navigator.language.toLowerCase();
  if (l.startsWith('ja')) return 'ja';
  if (l.startsWith('ko')) return 'ko';
  if (l.startsWith('zh')) return 'zh';
  return 'en';
}

export function setLanguage(lang: string, setter: (l: string) => void) {
  localStorage.setItem('ui-lang', lang);
  setter(lang);
}
