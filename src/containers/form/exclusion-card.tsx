import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ExclusionCategory } from '../../models/exclusion-report';

const Root = styled.div<{ colorSelector: (theme: DefaultTheme) => string }>`
	color: white;
	padding: 8px;
	border-radius: 12px;
	background-color: ${props => props.colorSelector(props.theme)};
	margin-bottom: 8px;
`;

const Name = styled.h1`
	font-size: 18px;
	margin: 4px 0;
`;

const Hr = styled.div`
	width: 100%;
	height: 1px;
	background-color: transparent;
	border-bottom: 1px solid white;
`;

const Submission = styled.p`
	font-weight: 300;
	font-size: 18px;
	margin: 4px 0;
`;

type ExclusionCardProps = React.PropsWithoutRef<{
	category: ExclusionCategory,
	color: (theme: DefaultTheme) => string,
	mySubmissions: number,
	totalSubmissions: number,
}>;

type ExclusionCardComponent = React.FunctionComponent<ExclusionCardProps>;

const ExclusionCard: ExclusionCardComponent = ({
	color,
	category,
	mySubmissions,
	totalSubmissions,
}) => {
	return (
		<Root colorSelector={color}>
			<Name>{category}</Name>
			<Hr />
			<Submission>Eu: {mySubmissions}</Submission>
			<Submission>Total: {totalSubmissions}</Submission>
		</Root>
	);
}

export default ExclusionCard;