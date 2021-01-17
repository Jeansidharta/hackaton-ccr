import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/button';
import { useMultistep } from '../../atoms/multistep-form/context';

const Root = styled.div`
	background-color: ${props => props.theme.colors.primary.main};
	padding: 10px 40px;
	border-radius: 32px;
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100%;
`;

const HeaderContainer = styled.div`

`;

const Title = styled.h1`
	font-size: 170px;
	margin: 0;
	font-weight: 700;
`;

const Subtitle = styled.p`
	font-size: 18px;
	margin-top: 0;
	font-weight: 500;
`;

const Paragraph = styled.p`
	font-size: 16px;
	margin: 40px 0;
	text-align: justify;
	width: 100%;
	max-width: 420px;
	font-weight: 400;
	line-height: 25px;
`;

const ContinueButton = styled(Button)`
	background-color: white;
	font-size: 20px;
	padding: 8px 32px;
	margin: 0 auto 20px auto;
	font-weight: 500;
`;

type IntroProps = React.PropsWithoutRef<{
}>;

type IntroComponent = React.FunctionComponent<IntroProps>;

const Intro: IntroComponent = () => {
	const { nextStage } = useMultistep();

	return (
		<Root>
			<HeaderContainer>
				<Title>LGPD</Title>
				<Subtitle>LEI GERAL DE PROTEÇÃO DE DADOS - nº 13.709/18</Subtitle>
			</HeaderContainer>
			<Paragraph>
				Em vigor desde 18/09/2020, o seu direito à privacidade e à
				proteção de dados pessoais está garantido conforme as normas da LGPD.
			</Paragraph>
			<ContinueButton onClick={nextStage}>Continuar</ContinueButton>
		</Root>
	);
}

export default Intro;