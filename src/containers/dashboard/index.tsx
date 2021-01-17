import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { useReportsData } from './use-reports-data';

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
	const { reportsAmmount } = useReportsData();

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
				<Cell color='yellow'>{reportsAmmount.Respeito['Políticas da Empresa']}</Cell>
				<Cell color='yellow'>{reportsAmmount.Respeito.Lideranças}*</Cell>
				<Cell color='yellow'>{reportsAmmount.Respeito.RH}*</Cell>
				<Cell color='yellow'>{reportsAmmount.Respeito.Colaboradores}*</Cell>
				<Cell color='yellow'>{reportsAmmount.Respeito['Avaliações de Desempenho']}</Cell>
				<Cell color='yellow'>{reportsAmmount.Respeito['Clientes / Parceiros']}*</Cell>
				<Cell color='yellow'>{reportsAmmount.Respeito.Outro}*</Cell>

				{/* Aprendizagem e Crescimento */}
				<Cell color='orange'>Aprendizagem e Crescimento</Cell>
				<Cell color='orange'>{reportsAmmount['Aprendizagem e Crescimento']['Políticas da Empresa']}</Cell>
				<Cell color='orange'>{reportsAmmount['Aprendizagem e Crescimento'].Lideranças}*</Cell>
				<Cell color='orange'>{reportsAmmount['Aprendizagem e Crescimento'].RH}*</Cell>
				<Cell color='orange'>{reportsAmmount['Aprendizagem e Crescimento'].Colaboradores}*</Cell>
				<Cell color='orange'>{reportsAmmount['Aprendizagem e Crescimento']['Avaliações de Desempenho']}</Cell>
				<Cell color='orange'>{reportsAmmount['Aprendizagem e Crescimento']['Clientes / Parceiros']}*</Cell>
				<Cell color='orange'>{reportsAmmount['Aprendizagem e Crescimento'].Outro}*</Cell>

				{/* Equilíbrio entre vida pessoal e profissional */}
				<Cell color='pink'>Equilíbrio entre vida pessoal e profissional</Cell>
				<Cell color='pink'>{reportsAmmount['Equilíbrio entre vida pessoal e profissional']['Políticas da Empresa']}</Cell>
				<Cell color='pink'>{reportsAmmount['Equilíbrio entre vida pessoal e profissional'].Lideranças}*</Cell>
				<Cell color='pink'>{reportsAmmount['Equilíbrio entre vida pessoal e profissional'].RH}*</Cell>
				<Cell color='pink'>{reportsAmmount['Equilíbrio entre vida pessoal e profissional'].Colaboradores}*</Cell>
				<Cell color='pink'>{reportsAmmount['Equilíbrio entre vida pessoal e profissional']['Avaliações de Desempenho']}</Cell>
				<Cell color='pink'>{reportsAmmount['Equilíbrio entre vida pessoal e profissional']['Clientes / Parceiros']}*</Cell>
				<Cell color='pink'>{reportsAmmount['Equilíbrio entre vida pessoal e profissional'].Outro}*</Cell>

				{/* Oportunidades de Carreira */}
				<Cell color='green'>Oportunidades de Carreira</Cell>
				<Cell color='green'>{reportsAmmount['Oportunidades de carreira']['Políticas da Empresa']}</Cell>
				<Cell color='green'>{reportsAmmount['Oportunidades de carreira'].Lideranças}*</Cell>
				<Cell color='green'>{reportsAmmount['Oportunidades de carreira'].RH}*</Cell>
				<Cell color='green'>{reportsAmmount['Oportunidades de carreira'].Colaboradores}*</Cell>
				<Cell color='green'>{reportsAmmount['Oportunidades de carreira']['Avaliações de Desempenho']}</Cell>
				<Cell color='green'>{reportsAmmount['Oportunidades de carreira']['Clientes / Parceiros']}*</Cell>
				<Cell color='green'>{reportsAmmount['Oportunidades de carreira'].Outro}*</Cell>

				{/* Elogio */}
				<Cell color='blue'>Elogio</Cell>
				<Cell color='blue'>{reportsAmmount.Elogio['Políticas da Empresa']}</Cell>
				<Cell color='blue'>{reportsAmmount.Elogio.Lideranças}*</Cell>
				<Cell color='blue'>{reportsAmmount.Elogio.RH}*</Cell>
				<Cell color='blue'>{reportsAmmount.Elogio.Colaboradores}*</Cell>
				<Cell color='blue'>{reportsAmmount.Elogio['Avaliações de Desempenho']}</Cell>
				<Cell color='blue'>{reportsAmmount.Elogio['Clientes / Parceiros']}*</Cell>
				<Cell color='blue'>{reportsAmmount.Elogio.Outro}*</Cell>

				{/* Outro */}
				<Cell color='gray'>Outro</Cell>
				<Cell color='gray'>{reportsAmmount.Outro['Políticas da Empresa']}</Cell>
				<Cell color='gray'>{reportsAmmount.Outro.Lideranças}*</Cell>
				<Cell color='gray'>{reportsAmmount.Outro.RH}*</Cell>
				<Cell color='gray'>{reportsAmmount.Outro.Colaboradores}*</Cell>
				<Cell color='gray'>{reportsAmmount.Outro['Avaliações de Desempenho']}</Cell>
				<Cell color='gray'>{reportsAmmount.Outro['Clientes / Parceiros']}*</Cell>
				<Cell color='gray'>{reportsAmmount.Outro.Outro}*</Cell>
			</Grid>
			<Observation>
				* Categorias que contém experiências de colaboradores no 1º emprego, estágio ou programa de treinee.
			</Observation>
		</Root>
	);
}

export default Dashboard;