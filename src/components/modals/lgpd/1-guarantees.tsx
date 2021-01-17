import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/button';
import { useMultistep } from '../../atoms/multistep-form/context';
import Guarantee from './guarantee';

const Root = styled.div`
	background-color: ${props => props.theme.colors.gray.light};
	padding: 32px;
	border-radius: 32px;
`;

const ContinueButton = styled(Button)`
	margin: 32px auto 0 auto;
	font-size: 20px;
	padding: 12px 32px;
`;
const Spacing = styled.div`
	width: 100%;
	height: 32px;
`;

type Gurantees1Props = React.PropsWithoutRef<{
}>;

type Gurantees1Component = React.FunctionComponent<Gurantees1Props>;

const Gurantees1: Gurantees1Component = ({  }) => {
	const { nextStage } = useMultistep();

	return (
		<Root>
			<Guarantee
				title='Dados pessoais anonimizados'
				paragraph='Garantimos que as informações aqui fornecidas não serão compartilhadas ou divulgadas, não sendo possível identificar ou rastreá-las até você.'
			/>
			<Spacing />
			<Guarantee
				title='Informações utilizadas para fins específicos'
				paragraph='Os dados fornecidos são para fins exclusivos de pesquisa acerca  de diversidade e inclusão na empresa contratante.'
			/>
			<ContinueButton onClick={nextStage}>Continuar</ContinueButton>
		</Root>
	);
}

export default Gurantees1;