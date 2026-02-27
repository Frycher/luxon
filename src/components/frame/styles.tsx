import styled from 'styled-components';

import img from '../../assets/bg.jpg';

export const FrameWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex-grow: 1;
	min-height: 100vh;
	padding: 0 15px;
	position: relative;
	background-image: url(${img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const FrameInner = styled.div`
	max-width: 358px;
	width: 100%;
	margin: 0 auto;
	position: relative;
	text-align: center;
	z-index: 2;
`;

export const FrameLogo = styled.img`
	width: 100%;
	height: 120px;
	object-fit: contain;
	margin-bottom: 48px;
`;
export const FrameCas = styled.img`
	width: 100%;
	height: 200px;
	object-fit: contain;
	margin-bottom: 32px;
`;

export const FrameOverlay = styled.div`
	height: 360px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%);
	opacity: 0.7;
	z-index: 1;
`;

export const FrameView = styled.iframe`
	position: absolute;
	width: 100%;
	height: 100%;
	border: none;
`;

export const FrameViewModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 1);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FrameViewClose = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 35px;
	right: 10px;
	height: 30px;
	width: 30px;
	background: #fff;
	color: #000;
	border-radius: 8px;
	cursor: pointer;
`;

export const FrameViewLoader = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
	font-size: 18px;
	font-weight: 600;
`;
