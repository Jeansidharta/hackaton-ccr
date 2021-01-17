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
}> & React.ComponentProps<'label'>;

type CheckboxComponent = React.FunctionComponent<CheckboxProps>;

const Checkbox: CheckboxComponent = ({
	children,
	...props
}) => {
	return (
		<Label {...props}>
			<Input />
			{children}
		</Label>
	);
}

export default Checkbox;