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
	className?: string;
}>;

type CheckboxComponent = React.FunctionComponent<CheckboxProps>;

const Checkbox: CheckboxComponent = ({
	children,
	className,
}) => {
	return (
		<Label className={className}>
			<Input />
			{children}
		</Label>
	);
}

export default Checkbox;