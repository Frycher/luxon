import type { Language } from './i18n';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
	ru: {
		'open.game': 'Открыть игру',
		loading: 'Загрузка...',
		'download.game': 'Скачать игру',
		'download.title': 'Скачать казино',
		'download.description': 'Играйте в Min где угодно, в любое время',
		'download.app': 'Установить приложение',
		'social.media': 'Мы в социальных сетях:',
		'age.restriction': 'Только 18+',
		'liceanse': 'Казино сертифицировано Anjouan Gaming Authority',
	},
	en: {
		'open.game': 'Open the game',
		loading: 'Loading...',
		'download.game': 'Download the game',
		'download.title': 'Download Casino',
		'download.description': 'Play Min anywhere, anytime',
		'download.app': 'Install App',
		'social.media': 'Us on social media:',
		'age.restriction': 'Only 18+',
		'liceanse': 'Casino is certified by the Anjouan Gaming Authority',
	},
	tr: {
		'open.game': 'Oyunu aç',
		loading: 'Yükleniyor...',
		'download.game': 'Oyunu indir',
		'download.title': 'Kumarhaneyi indir',
		'download.description': 'Min ile her yerde, her zaman oynayın',
		'download.app': 'Uygulamayı yükle',
		'social.media': 'Sosyal medyada biz:',
		'age.restriction': 'Sadece 18+',
		'liceanse': 'Casino, Anjouan Oyun Otoritesi tarafından sertifikalandırılmıştır',
	},
};
