import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${props => props.theme.colors.primary.main};
	text-align: center;
`;

const Padlock = styled.img.attrs({ src: '/icons/lock.svg', alt: '' })`
	width: 64px;
	height: 64px;
	margin-bottom: 16px;
`;

const Title = styled.h1`
	font-size: 20px;
`;

const Paragraph = styled.p`
	text-align: justify;
	font-size: 18px;
	margin: 0;
	max-width: 600px;
`;

type GuaranteeProps = React.PropsWithoutRef<{
	title: string,
	paragraph: string,
}>;

type GuaranteeComponent = React.FunctionComponent<GuaranteeProps>;

const Guarantee: GuaranteeComponent = ({
	title,
	paragraph
}) => {
	return (
		<Root>
			<Padlock />
			<Title>{title}</Title>
			<Paragraph>{paragraph}</Paragraph>
		</Root>
	);
}

export default Guarantee;