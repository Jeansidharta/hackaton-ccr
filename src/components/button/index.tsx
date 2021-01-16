import styled from 'styled-components';

const Button = styled.button`
	background-color: transparent;
	padding: 4px 16px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 42px;
	border: 1px solid ${props => props.theme.colors.primary.main};
	color: ${props => props.theme.colors.primary.main}
`;

export default Button;