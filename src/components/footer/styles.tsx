import styled from 'styled-components';
import { getFooterBackground } from '../../lib/theme';
import type { Language } from '../../constants/i18n';

export const FooterWrapper = styled.footer<{ $locale: Language }>`
	display: flex;
	justify-content: space-between;
	gap: 32px;
	padding: 61px 32px;
	background: ${({ $locale }) => getFooterBackground($locale)};
	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const FooterLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 64px;
	@media (max-width: 1400px) {
		gap: 40px;
	}
	@media (max-width: 1200px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const FooterRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 40px;
	@media (max-width: 1200px) {
		padding-top: 0px;
		gap: 60px;
	}
`;

export const FooterCharacter = styled.img`
	display: flex;
	@media (max-width: 1200px) {
		display: none;
	}
`;

export const FooterSocial = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 12px;
	@media (max-width: 1200px) {
		align-items: center;
	}
`;

export const FooterSocialTitle = styled.div`
	text-align: right;
	color: #bababa;
`;

export const FooterSocials = styled.div`
	display: flex;
	gap: 4px;
`;

export const FooterSocialLink = styled.a<{ $color: string; $hover?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 52px;
	height: 52px;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	svg {
		width: 60%;
		height: 60%;
		fill: #fff;
	}
	${({ $color }) => $color && `background: ${$color};`}
	${({ $hover }) => $hover && `&:hover { background: ${$hover}; }`}
`;

export const FooterDownload = styled.div`
	max-width: 390px;
	width: 100%;
	border-radius: 16px;
	padding: 24px;
	border: 1px dashed #ff7700;
	background: rgba(255, 255, 255, 0.04);
	text-align: center;
`;

export const FooterDownloadLogo = styled.img`
	height: 80px;
	margin-bottom: 24px;
`;

export const FooterDownloadTitle = styled.div`
	font-size: 32px;
	line-height: 1.1;
	font-weight: 900;
	margin-bottom: 4px;
`;

export const FooterDownloadDescription = styled.div`
	color: #bababa;
	font-weight: 600;
	margin-bottom: 18px;
`;

export const FooterRestriction = styled.div<{ $mobile?: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 24px;
	${({ $mobile }) => $mobile && `display: none;`}

	@media (max-width: 1200px) {
		display: none;
		${({ $mobile }) =>
			$mobile &&
			`
			display: flex;
			flex-direction: row;
		`}
	}

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const FooterRestrictionItem = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	color: rgba(251, 251, 251, 0.7);
	@media (max-width: 1200px) {
		max-width: 280px;
		width: 100%;
	}
	@media (max-width: 480px) {
		flex-direction: column;
		text-align: center;
	}
`;
