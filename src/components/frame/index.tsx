import { useState } from 'react';

import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useLocale } from '../../context/locale';

import { FrameCas, FrameInner, FrameLogo, FrameOverlay, FrameView, FrameViewClose, FrameViewLoader, FrameViewModal, FrameWrapper } from './styles';

import Logo from '../../assets/logo.png';
import Casino from '../../assets/casino.png';

export const Frame = () => {
	const { t } = useLocale();

	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	return (
		<FrameWrapper>
			{open && (
				<FrameViewModal onClick={() => setOpen(false)}>
					{loading && <FrameViewLoader>{t['loading']}</FrameViewLoader>}
					<FrameView
						src="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
						onLoad={() => setLoading(false)}
					/>
					<FrameViewClose onClick={() => setOpen(false)}>
						<CloseIcon />
					</FrameViewClose>
				</FrameViewModal>
			)}
			<FrameInner>
				<FrameLogo src={Logo} alt="Logo" />
				<FrameCas src={Casino} alt="Casino" />
				<Button variant="gradient" onClick={() => setOpen(true)} sx={{ fontWeight: 600, width: '100%' }}>
					{t['open.game']}
				</Button>
			</FrameInner>
			<FrameOverlay />
		</FrameWrapper>
	);
};
