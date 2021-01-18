import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { exclusionCategory2Color } from '../../libs/exclusion-category-2-color';
import { ExclusionReport } from '../../models/exclusion-report';

const Root = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 0 51px 0 0;
	overflow: hidden;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	width: 325px;
	height: 235px;
	background-color: white;
`;

const Header = styled.div`
	padding: 8px;
	position: relative;
`;

const Category = styled.p`
	margin: 0;
`;

const Source = styled.p`
	margin: 0;
`;

const Hr = styled.div`
	border-bottom: 1px solid ${props => props.theme.colors.primary.main};
	width: 100%;
	height: 1px;
`;

const Body = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const ColorStrip = styled.div<{ colorSelector: (theme: DefaultTheme) => string }>`
	background-color: ${props => props.colorSelector(props.theme)};
	height: 100%;
	width: 30px;
`;

const BodyMessage = styled.p`
	padding: 16px;
	margin: 0;
	height: 180px;
	width: 100%;
	overflow: auto;
`;

const FirstJobStar = styled.span.attrs({ children: '*' })`
	font-size: 40px;
	position: absolute;
	right: 8px;
	bottom: -16px;
	color: ${props => props.theme.colors.primary.main};
	user-select: none;
`;

type CardProps = React.PropsWithoutRef<{
	report: ExclusionReport,
}>;

type CardComponent = React.FunctionComponent<CardProps>;

const Card: CardComponent = ({
	report,
}) => {
	return (
		<Root>
			<Header>
				<Category><strong>Em: </strong>{report.category}</Category>
				<Source><strong>De: </strong>{report.source}</Source>
				{ report.isFirstJob && <FirstJobStar /> }
			</Header>
			<Hr />
			<Body>
				<ColorStrip colorSelector={theme => exclusionCategory2Color(theme, report.category)} />
				<BodyMessage>{report.message}</BodyMessage>
			</Body>
		</Root>
	);
}

export default Card;