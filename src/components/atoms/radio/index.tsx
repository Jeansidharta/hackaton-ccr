import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'radio' })`
	margin-right: 12px;
	cursor: pointer;
`;

const Label = styled.label`
	cursor: pointer;
	display: flex;
	align-items: center;
`;

type RadioProps = React.PropsWithChildren<{
	onChange?: (value: boolean) => void,
	name: string,
}> & Omit<React.ComponentProps<'label'>, 'onChange'>;

type RadioComponent = React.FunctionComponent<RadioProps>;

const Radio: RadioComponent = ({
	children,
	ref,
	onChange = () => {},
	name,
	...props
}) => {
	function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.checked;
		onChange(value);
	}

	return (
		<Label {...props}>
			<Input name={name} onChange={handleChange} />
			{children}
		</Label>
	);
}

export default Radio;