import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { DEFAULT_LANGUAGE, type Language } from '../constants/i18n';
import { TRANSLATIONS } from '../constants/translations';

const LocaleContext = createContext<{
	locale: Language;
	updateLocale: (locale: Language) => void;
	t: Record<string, string>;
}>({
	locale: DEFAULT_LANGUAGE,
	updateLocale: () => {},
	t: {},
});

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
	const [locale, setLocale] = useState(() => {
		return (localStorage.getItem('locale') as Language) || DEFAULT_LANGUAGE;
	});

	const updateLocale = useCallback((newLocale: Language) => {
		setLocale(newLocale);
		localStorage.setItem('locale', newLocale);
	}, []);

	const returnValue = useMemo(() => ({ locale, updateLocale, t: TRANSLATIONS[locale] }), [locale, updateLocale]);

	return <LocaleContext.Provider value={returnValue}>{children}</LocaleContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLocale = () => {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error('useLocale must be used within a LocaleProvider');
	}
	return context;
};

export default LocaleProvider;
