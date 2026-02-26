export type Language = 'ru' | 'en' | 'tr';

export const LANGUAGES: Language[] = ['ru', 'en', 'tr'];

export const LANGUAGES_LABELS: Record<Language, string> = {
	ru: 'Русский',
	en: 'English',
	tr: 'Türkçe',
};

export const DEFAULT_LANGUAGE: Language = 'en';
