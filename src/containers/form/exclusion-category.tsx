import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

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

type ExclusionCategoryProps = React.PropsWithoutRef<{
	name: string,
	color: (theme: DefaultTheme) => string,
}>;

type ExclusionCategoryComponent = React.FunctionComponent<ExclusionCategoryProps>;

const ExclusionCategory: ExclusionCategoryComponent = ({
	color,
	name
}) => {
	return (
		<Root colorSelector={color}>
			<Name>{name}</Name>
			<Hr />
			<Submission>Eu: 0</Submission>
			<Submission>Total: 100</Submission>
		</Root>
	);
}

export default ExclusionCategory;