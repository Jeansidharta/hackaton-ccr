import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

const Root = styled.div`
	padding: 16px;
	background-color: ${props => props.theme.colors.gray.light};
	min-height: 100vh;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 24px;
	color: ${props => props.theme.colors.primary.main};
	margin: 0;
`;

const Hr = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid ${props => props.theme.colors.primary.main};
	margin: 16px 0;
`;

const MetaInfo = styled.p`
	margin: 8px 0;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(7, 1fr);
	align-items: center;
	justify-items: center;
	width: 100%;
	column-gap: 2px;
	row-gap: 2px;
`;

const Cell = styled.div<{ color?: keyof DefaultTheme['colors'] }>`
	font-weight: ${props => props.color ? 'normal' : 'bold'};
	color: ${props => props.color ? 'white' : 'black'};
	background-color: ${props => props.color ? props.theme.colors[props.color].main : 'transparent'};
	font-size: 20px;
	text-align: center;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Observation = styled.p`
	color: ${props => props.theme.colors.primary.main};
	font-size: 20px;
	margin: 16px 0;
`;

type DashboardProps = React.PropsWithoutRef<{
}>;

type DashboardComponent = React.FunctionComponent<DashboardProps>;

const Dashboard: DashboardComponent = ({  }) => {
	return (
		<Root>
			<Title>Métricas com foco em inclusão da empresa Xis</Title>
			<Hr />
			<MetaInfo>
				Período de Coleta: <strong>Jan, 2021</strong>
			</MetaInfo>
			<MetaInfo>
				Recebemos <strong>322</strong> experiências, sendo <strong>150</strong> de
				colaboradores no 1º emprego, estágio ou programa de treinee.
			</MetaInfo>
			<Grid>
				{/* Header */}
				<span />
				<Cell>Políticas da Empresa</Cell>
				<Cell>Lideranças</Cell>
				<Cell>RH</Cell>
				<Cell>Colaboradores</Cell>
				<Cell>Avaliações de Desempenho</Cell>
				<Cell>Clientes / Parceiros</Cell>
				<Cell>Outro</Cell>

				{/* Respeito */}
				<Cell color='yellow'>Respeito</Cell>
				<Cell color='yellow'>14</Cell>
				<Cell color='yellow'>50*</Cell>
				<Cell color='yellow'>50*</Cell>
				<Cell color='yellow'>17*</Cell>
				<Cell color='yellow'>3</Cell>
				<Cell color='yellow'>12*</Cell>
				<Cell color='yellow'>3*</Cell>

				{/* Aprendizagem e Crescimento */}
				<Cell color='orange'>Aprendizagem e Crescimento</Cell>
				<Cell color='orange'>14</Cell>
				<Cell color='orange'>50*</Cell>
				<Cell color='orange'>50*</Cell>
				<Cell color='orange'>17*</Cell>
				<Cell color='orange'>3</Cell>
				<Cell color='orange'>12*</Cell>
				<Cell color='orange'>3*</Cell>

				{/* Equilíbrio entre vida pessoal e profissional */}
				<Cell color='pink'>Equilíbrio entre vida pessoal e profissional</Cell>
				<Cell color='pink'>14</Cell>
				<Cell color='pink'>50*</Cell>
				<Cell color='pink'>50*</Cell>
				<Cell color='pink'>17*</Cell>
				<Cell color='pink'>3</Cell>
				<Cell color='pink'>12*</Cell>
				<Cell color='pink'>3*</Cell>

				{/* Oportunidades de Carreira */}
				<Cell color='green'>Oportunidades de Carreira</Cell>
				<Cell color='green'>14</Cell>
				<Cell color='green'>50*</Cell>
				<Cell color='green'>50*</Cell>
				<Cell color='green'>17*</Cell>
				<Cell color='green'>3</Cell>
				<Cell color='green'>12*</Cell>
				<Cell color='green'>3*</Cell>

				{/* Elogio */}
				<Cell color='blue'>Elogio</Cell>
				<Cell color='blue'>14</Cell>
				<Cell color='blue'>50*</Cell>
				<Cell color='blue'>50*</Cell>
				<Cell color='blue'>17*</Cell>
				<Cell color='blue'>3</Cell>
				<Cell color='blue'>12*</Cell>
				<Cell color='blue'>3*</Cell>

				{/* Outro */}
				<Cell color='gray'>Outro</Cell>
				<Cell color='gray'>14</Cell>
				<Cell color='gray'>50*</Cell>
				<Cell color='gray'>50*</Cell>
				<Cell color='gray'>17*</Cell>
				<Cell color='gray'>3</Cell>
				<Cell color='gray'>12*</Cell>
				<Cell color='gray'>3*</Cell>
			</Grid>
			<Observation>
				* Categorias que contém experiências de colaboradores no 1º emprego, estágio ou programa de treinee.
			</Observation>
		</Root>
	);
}

export default Dashboard;