import React from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../../libs/hooks/use-local-storage';
import { ExclusionCategory, ExclusionReport, ExclusionSource } from '../../models/exclusion-report';
import Card from './card';
import Filter from './filter';

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

const MainContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 32px;
`;

const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 16px;
`;

const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	height: 100%;
	justify-content: space-between;
	row-gap: 32px;
`;

const FirstJobObservationText = styled.p`
	color: ${props => props.theme.colors.primary.main};
	font-size: 20px;
`;

type AdminPageComponent = React.FunctionComponent;

const AdminPage: AdminPageComponent = ({  }) => {
	const [categoryFilter, setCategoryFilter] = React.useState<string | null>(null);
	const [sourceFilter, setSourceFilter] = React.useState<string | null>(null);

	const [allReports] = useLocalStorage<ExclusionReport[]>('my-exclusion-reports', []);

	const filteredReports = allReports.filter(report => {
		if (categoryFilter && report.category !== categoryFilter) return false;
		if (sourceFilter && report.source !== sourceFilter) return false;
		return true;
	});

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
			<MainContainer>
				<FilterContainer>
					<Filter
						title='Categorias'
						options={ExclusionCategory}
						onChange={setCategoryFilter}
						isCategory
					/>
					<Filter
						title='Fontes'
						options={ExclusionSource}
						onChange={setSourceFilter}
					/>
					<FirstJobObservationText>
						* Primeiro emprego, estágio ou programa de treinee.
					</FirstJobObservationText>
				</FilterContainer>
				<CardsContainer>
					{filteredReports.map(report => <Card report={report} />)}
				</CardsContainer>
			</MainContainer>
		</Root>
	);
}

export default AdminPage;