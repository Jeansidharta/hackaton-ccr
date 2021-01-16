import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	display: inline;
	border-radius: 2px;
`;

const Label = styled.label`
	font-weight: normal;
`;

const Input = styled.select`
	font-weight: normal;
	font-size: inherit;
	cursor: pointer;
`;

const Option = styled.option`
`;

type SelectProps = React.PropsWithoutRef<{
	options: ({ text: string, value: string } | string)[],
	onChange?: (newValue: string) => void,
	label?: string,
	className?: string,
}>;

type SelectComponent = React.FunctionComponent<SelectProps>;

const Select: SelectComponent = ({
	options,
	onChange = () => {},
	label,
}) => {
	function handleChange (event: React.ChangeEvent<HTMLSelectElement>) {
		const newValue = event.target.value;
		onChange(newValue);
	}

	return (
		<Root>
			<Label>{label}</Label>
			<Input onChange={handleChange}>
				<Option value=''></Option>
				{options.map(option => {
					if (typeof option === 'string') {
						return <Option key={option} value={option}>{option}</Option>;
					} else {
						return <Option key={option.value} value={option.value}>{option.text}</Option>;
					}
				})}
			</Input>
		</Root>
	);
}

export default Select;