import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/button';
import { useMultistep } from '../../atoms/multistep-form/context';

const Root = styled.div`
	background-color: ${props => props.theme.colors.primary.main};
	padding: 10px 60px;
	border-radius: 32px;
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100%;
`;

const TitleContainer = styled.div`

`;

const Title = styled.h1`
	font-size: 100px;
	margin: 0 0 32px 0;
	font-weight: 700;
`;

const Subtitle = styled.p`
	font-size: 18px;
	margin: 0;
`;

const Paragraph = styled.p`
	font-size: 22px;
	margin: 40px 0;
	text-align: center;
	font-weight: bold;
	width: 100%;
	line-height: 25px;
	max-width: 420px;
`;

const ContinueButton = styled(Button)`
	font-size: 20px;
	&& {
		background-color: white;
		padding: 8px 32px;
	}
	margin: 64px auto 20px auto;
	font-weight: 500;
`;

const Padlock = styled.img.attrs({ src: '/icons/lock-white.svg', alt: '' })`
	width: 48px;
	height: 48px;
	margin: 48px 0;
`;

type IntroProps = React.PropsWithoutRef<{
}>;

type IntroComponent = React.FunctionComponent<IntroProps>;

const Intro: IntroComponent = () => {
	const { nextStage } = useMultistep();

	return (
		<Root>
			<Paragraph>
				O seu direito à privacidade e à proteção de dados pessoais está garantido por lei.
			</Paragraph>
			<Padlock />
			<TitleContainer>
				<Title>LGPD</Title>
				<Subtitle>
					<strong>LEI GERAL DE PROTEÇÃO DE DADOS - nº 13.709/18</strong>
				</Subtitle>
				<Subtitle>Em vigor desde 18/09/2020</Subtitle>
			</TitleContainer>
			<ContinueButton onClick={nextStage}>Continuar</ContinueButton>
		</Root>
	);
}

export default Intro;