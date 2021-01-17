import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import usePostData from '../../api/post-data';
import Button from '../../components/atoms/button';
import Select from '../../components/atoms/select';
import { useRouter } from 'next/router';

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

const StyledSelect = styled(Select)`
	width: max-content;
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

type FormData = {
	race: string,
	sexuality: string,
	gender: string,
	transgender: string,
	ageGroup: string,
	deficiency: string,
	workTime: string,
	satisfaction: string,
};

const Index: IndexComponent = ({  }) => {
	const router = useRouter();

	const [data, setData] = React.useState<Partial<FormData>>({});
	const [postSubmit, { loading, error, responseData }] = usePostData({});

	React.useEffect(() => {
		if (loading) return;
		else if (error) toast.error(error.message);
		else if (responseData) toast.success('Dados enviados com sucesso');
	}, [loading, responseData, error]);

	async function handleSubmit () {
		const response = await postSubmit(data);
		if (!response) return;
		router.push('/form');
	}

	function handleSelectChange (dataKey: keyof FormData, value: string) {
		setData({ ...data, [dataKey]: value });
	}

	const makeHandler = (dataKey: keyof FormData) => {
		return (value: string) => handleSelectChange(dataKey, value);
	};

	const RaceSelect = <StyledSelect onChange={makeHandler('race')} options={race} />;
	const SexualitySelect = <StyledSelect onChange={makeHandler('sexuality')} options={sexuality} />;
	const GenderSelect = <StyledSelect onChange={makeHandler('gender')} options={gender} />;
	const TransgenderSelect = <StyledSelect onChange={makeHandler('transgender')} options={transgender} />;
	const AgeGroupSelect = <StyledSelect onChange={makeHandler('ageGroup')} options={ageGroup} />;
	const DeficiencySelect = <StyledSelect onChange={makeHandler('deficiency')} options={deficiency} />;
	const WorkTimeSelect = <StyledSelect onChange={makeHandler('workTime')} options={workTime} />;
	const SatisfactionSelect = <StyledSelect onChange={makeHandler('satisfaction')} options={satisfaction} />;

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
			<ContinueButton onClick={handleSubmit} loading={loading}>
				Continuar
			</ContinueButton>
		</Root>
	);
}

export default Index;