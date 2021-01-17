import styled from 'styled-components';
import Spinner from '../spinner';

const Root = styled.button`
	background-color: transparent;
	padding: 4px 16px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 42px;
	border: 1px solid ${props => props.theme.colors.primary.main};
	color: ${props => props.theme.colors.primary.main};
	font-weight: bold;
`;

const Spacing = styled.div`
	height: 1px;
	width: 12px;
`;

type ButtonProps = React.PropsWithChildren<{
	loading?: boolean,
	spinnerSpacing?: number | string,
}> & React.ComponentProps<'button'>;

type ButtonComponent = React.FunctionComponent<ButtonProps>;

const Button: ButtonComponent = ({
	children,
	className,
	loading,
	spinnerSpacing = 12,
}) => {
	return (
		<Root className={className}>
			{children}
			{ loading && <><Spacing style={{ width: spinnerSpacing }} /><Spinner /></> }
		</Root>
	);
}

export default Button;