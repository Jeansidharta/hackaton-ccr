import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/button';
import Select from '../../components/atoms/select';

const Root = styled.div`
	background-color: ${props => props.theme.colors.gray.light};
	min-width: 100%;
	min-height: 100%;
	padding: 44px;
`;

const Title = styled.h1`
	font-weight: normal;
	font-size: 36px;
	margin-bottom: 60px;
	margin-left: 5px;
	margin-top: 0;
	// margin-top: 70px;
`;

const Card = styled.div`
	border-radius: 81px;
	padding: 32px;
	background-color: white;
	font-size: 36px;
	line-height: 100px;
`;

const ContinueButton = styled(Button)`
	margin: 47px 0 0 auto;
	font-size: 36px;
	padding: 22px 66px;
`;

type IndexProps = React.PropsWithoutRef<{
}>;

type IndexComponent = React.FunctionComponent<IndexProps>;

const race = [
	'indigena',
	'amarela',
	'preta',
	'parda',
	'branca',
	'outra',
];

const sexuality = [
	'homossexual',
	'bissexual',
	'assexual',
	'heterossexual',
	'outro',
];

const gender = [
	'mulher',
	'homem',
	'não-binátio',
	'outro',
];

const transgender = [
	{ text: 'transgênero', value: 'trans' },
	{ text: 'cisgênero', value: 'cis' },
	'outro',
];

const ageGroup = [
	{ text: 'meus vinte', value: '20' },
	{ text: 'meus trinta', value: '30' },
	{ text: 'meus quarenta', value: '40' },
	{ text: 'meus cinquenta em diante', value: '50+' },
];

const deficiency = [
	{ text: 'sem', value: 'sem' },
	{ text: 'visivelmente com', value: 'visivel' },
	{ text: 'que não aparenta, porém com', value: 'invisivel' },
];

const workTime = [
	{ text: 'menos de 1', value: '0' },
	'1',
	'2',
	'3 a 5',
	'6 a 8',
	'9 a 11',
	'mais de 12',
];

const satisfaction = [
	'muito baixo',
	'baixo',
	'médio',
	'alto',
	'muito alto',
];

const Index: IndexComponent = ({  }) => {
	const RaceSelect = <Select options={race} />;
	const SexualitySelect = <Select options={sexuality} />;
	const GenderSelect = <Select options={gender} />;
	const TransgenderSelect = <Select options={transgender} />;
	const AgeGroupSelect = <Select options={ageGroup} />;
	const DeficiencySelect = <Select options={deficiency} />;
	const WorkTimeSelect = <Select options={workTime} />;
	const SatisfactionSelect = <Select options={satisfaction} />;

	return (
		<Root>
			<Title>Antes de começarmos, nos conte um pouco sobre você?</Title>
			<Card>
				Eu me identifico como raça {RaceSelect}. Sou {SexualitySelect}
				, {GenderSelect} e {TransgenderSelect}. Estou em {AgeGroupSelect} e
				sou uma pessoa {DeficiencySelect} deficiências. Eu trabalho nesta empresa
				há {WorkTimeSelect} ano(s), e o meu nível de satisfação com o trabalho
				atualmente é {SatisfactionSelect}
			</Card>
			<ContinueButton>Continuar</ContinueButton>
		</Root>
	);
}

export default Index;