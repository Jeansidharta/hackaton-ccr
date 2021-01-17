import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	background-color: ${props => props.theme.colors.primary.main};
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	padding: 64px;
`;

const Title = styled.h1`
	font-size: 64px;
	text-align: center;
`;

const Padlock = styled.img.attrs({ src: '/icons/lock-white.svg', alt: '' })`
	width: 80px;
	height: 80px;
	margin: 32px 0;
`;

const Subtitle = styled.p`
	font-weight: 500;
	font-size: 32px;
	max-width: 820px;
	text-align: center;
`;

const Paragraph = styled.p`
	font-size: 22px;
	font-weight: 300;
	max-width: 820px;
	text-align: justify;
`;

const Anchor = styled.a`
	font-weight: bold;
	color: white;
`;

type ConfirmationPageProps = React.PropsWithoutRef<{
}>;

type ConfirmationPageComponent = React.FunctionComponent<ConfirmationPageProps>;

const ConfirmationPage: ConfirmationPageComponent = ({  }) => {
	return (
		<Root>
			<Title>Agradecemos pela sua colaboração!</Title>
			<Padlock />
			<Subtitle>Solicite informações sobre os seus dados quando quiser</Subtitle>
			<Paragraph>
				Para confirmar a existências de tratamento dos seus dados pessoais,
				solicitar informações sobre como são computados, acessá-los, ou deletá-los
				de nosso banco de dados. Entre em contato através de nosso <Anchor href='#'>
				Canal de Atendimento</Anchor>, de Segunda à Sexta das 9h às 18h.
			</Paragraph>
		</Root>
	);
}

export default ConfirmationPage;