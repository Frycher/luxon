import { Button, MenuItem, Select } from '@mui/material';

import { useLocale } from '../../context/locale';

import { LANGUAGES, LANGUAGES_LABELS } from '../../constants/i18n';

import FileFooterDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';

import Logo from '../../assets/logo.png';
import Character from '../../assets/character.png';
import Age from '../../assets/age.svg';
import licence from '../../assets/licence logo.png';

import {
	FooterWrapper,
	FooterDownload,
	FooterDownloadDescription,
	FooterDownloadLogo,
	FooterDownloadTitle,
	FooterCharacter,
	FooterLeft,
	FooterRight,
	FooterSocial,
	FooterSocialLink,
	FooterSocialTitle,
	FooterSocials,
	FooterRestriction,
	FooterRestrictionItem,
} from './styles';

export const Footer = () => {
	const { updateLocale, t, locale } = useLocale();

	return (
		<FooterWrapper $locale={locale}>
			<FooterLeft>
				<FooterCharacter src={Character} alt="Character" />
				<FooterDownload>
					<FooterDownloadLogo src={Logo} alt="Logo" />
					<FooterDownloadTitle>{t['download.title']}</FooterDownloadTitle>
					<FooterDownloadDescription>{t['download.description']}</FooterDownloadDescription>
					<Button variant="gradient" sx={{ fontWeight: 600, width: '100%' }}>
						<FileFooterDownloadOutlinedIcon sx={{ marginRight: '8px' }} />
						{t['download.app']}
					</Button>
				</FooterDownload>
				<FooterRestriction>
					<FooterRestrictionItem>
						<img src={Age} alt="Age" />
						{t['age.restriction']}
					</FooterRestrictionItem>
					<FooterRestrictionItem>
						<img src={licence} alt="Licence" />
						{t['liceanse']}
					</FooterRestrictionItem>
				</FooterRestriction>
			</FooterLeft>
			<FooterRight>
				<Select value={locale} onChange={(e) => updateLocale(e.target.value)} sx={{ width: '280px', margin: '0 auto' }}>
					{LANGUAGES.map((language) => (
						<MenuItem key={language} value={language}>
							{LANGUAGES_LABELS[language]}
						</MenuItem>
					))}
				</Select>
				<FooterSocial>
					<FooterSocialTitle>{t['social.media']}</FooterSocialTitle>
					<FooterSocials>
						<FooterSocialLink
							href="https://www.instagram.com/"
							$color="radial-gradient(92.18% 99.11% at 26.56% 107.7%, #fd5 0%, #fd5 10%, #ff543e 50%, #c837ab 100%);">
							<InstagramIcon />
						</FooterSocialLink>
						<FooterSocialLink href="https://t.me/" $color="#398fff">
							<TelegramIcon />
						</FooterSocialLink>
						<FooterSocialLink href="https://twitter.com/" $color="#000">
							<XIcon />
						</FooterSocialLink>
						<FooterSocialLink href="mailto:example@example.com" $color="#000">
							<EmailIcon />
						</FooterSocialLink>
					</FooterSocials>
				</FooterSocial>

				<FooterRestriction $mobile>
					<FooterRestrictionItem>
						<img src={Age} alt="Age" />
						{t['age.restriction']}
					</FooterRestrictionItem>
					<FooterRestrictionItem>
						<img src={licence} alt="Licence" />
						{t['liceanse']}
					</FooterRestrictionItem>
				</FooterRestriction>
			</FooterRight>
		</FooterWrapper>
	);
};
