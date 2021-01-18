import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import Radio from '../../components/atoms/radio';
import { exclusionCategory2Color } from '../../libs/exclusion-category-2-color';
import { ExclusionCategory } from '../../models/exclusion-report';

const Root = styled.form`
	width: 272px;
	background-color: white;
`;

const Title = styled.p`
	font-size: 22px;
	text-align: center;
	color: black;
	font-weight: bold;
`;

const RadioContainer = styled.div<{ colorSelector: (theme: DefaultTheme) => string }>`
	background-color: ${props => props.colorSelector(props.theme)};
	padding: 10px;
	color: white;
	margin: 1px 0;
`;

type FilterProps = React.PropsWithoutRef<{
	options: readonly string[];
	onChange?: (newValue: string) => void,
	title: string;
}>;

type FilterComponent = React.FunctionComponent<FilterProps>;

const Filter: FilterComponent = ({
	options,
	onChange = () => {},
	title,
}) => {
	function  handleRadioChange (option: string) {
		onChange(option);
	}

	return (
		<Root>
			<Title>{title}</Title>
			{options.map(option => (
				<RadioContainer colorSelector={theme => exclusionCategory2Color(theme, option as ExclusionCategory) || theme.colors.primary.main}>
					<Radio
						name='filter'
						onChange={value => value && handleRadioChange(option)}
					>
						{option}
					</Radio>
				</RadioContainer>
			))}
		</Root>
	);
}

export default Filter;