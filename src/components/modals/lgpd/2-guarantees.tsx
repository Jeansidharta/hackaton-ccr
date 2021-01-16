import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/button';
import { useMultistep } from '../../multistep-form/context';
import Guarantee from './guarantee';

const Root = styled.div`
	background-color: ${props => props.theme.colors.gray.light};
	padding: 32px;
	border-radius: 32px;
`;

const ActionButton = styled(Button)`
	font-size: 20px;
	padding: 12px 32px;
`;
const Spacing = styled.div`
	width: 100%;
	height: 32px;
`;

const ButtonsContainer = styled.div`
	margin-top: 32px;
	display: flex;
	justify-content: space-around;
`;

type Gurantees2Props = React.PropsWithoutRef<{
}>;

type Gurantees2Component = React.FunctionComponent<Gurantees2Props>;

const Gurantees2: Gurantees2Component = ({  }) => {
	const { setStage, submit } = useMultistep();

	return (
		<Root>
			<Guarantee
				title='Armazenamento dos dados'
				paragraph='Suas informações são armazendas apenas em nosso banco de dados e também estão protegidos pelas Políticas de Privadade do contrato assinado de prestação de serviços.'
			/>
			<Spacing />
			<Guarantee
				title='Apenas resultados são compartilhados'
				paragraph='Seus dados serão somados a todas as outras respostas fornecidas, gerando métricas (números) dispostos em uma tabela. Essa tabela é o resultado da pesquisa compartilhado com a empresa contratante.'
			/>
			<ButtonsContainer>
				<ActionButton onClick={() => setStage(0)}>Cancelar</ActionButton>
				<ActionButton onClick={submit}>Continuar</ActionButton>
			</ButtonsContainer>
		</Root>
	);
}

export default Gurantees2;