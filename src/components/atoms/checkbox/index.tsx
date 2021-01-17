import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox' })`
	margin-right: 12px;
	cursor: pointer;
`;

const Label = styled.label`
	cursor: pointer;
	display: flex;
	align-items: center;
`;

type CheckboxProps = React.PropsWithChildren<{
	onChange?: (value: boolean) => void,
}> & Omit<React.ComponentProps<'label'>, 'onChange'>;

type CheckboxComponent = React.FunctionComponent<CheckboxProps>;

const Checkbox: CheckboxComponent = ({
	children,
	ref,
	onChange = () => {},
	...props
}) => {
	function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.checked;
		onChange(value);
	}

	return (
		<Label {...props}>
			<Input onChange={handleChange} />
			{children}
		</Label>
	);
}

export default Checkbox;