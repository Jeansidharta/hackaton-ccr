import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import usePostData from '../../api/post-data';
import Button from '../../components/atoms/button';
import Checkbox from '../../components/atoms/checkbox';
import Select from '../../components/atoms/select';
import { useLocalStorage } from '../../libs/hooks/use-local-storage';
import { ExclusionCategory, ExclusionReport, ExclusionSource } from '../../models/exclusion-report';
import ExclusionCard from './exclusion-card';

const Root = styled.div`
	display: flex;
	background-color: ${props => props.theme.colors.gray.light};
	color: ${props => props.theme.colors.primary.main};
	padding: 32px 16px;
`;

const ExclusionCategoriesContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 200px;
	margin-right: 32px;
`;

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%:
	height: 100%;
`;

const HeaderText = styled.p`
	width: 100%;
	text-align: justify;
	margin-top: 0;
	font-size: 18px;
`;

const Card = styled.div`
	background-color: white;
	border-radius: 18px;
	padding: 16px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const CardTitle = styled.h1`
	font-size: 26px;
	margin: 0;
`;

const Hr = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid ${props => props.theme.colors.primary.main};
	margin: 16px 0;
`;

const Form = styled.form`
	display: flex;
	height: 100%;
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 100%;
	resize: vertical;
	border-radius: 4px;
	padding: 8px;
	font-size: 20px;
`;

const ControlArea = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 8px;
	justify-content: space-between;
	max-width: 200px;
`;

const ActionButton = styled(Button)`
	font-size: 16px;
	padding: 4px 32px;
	margin-top: 16px;
	width: 100%;
`;

const ActionButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 16px;
`;

const StyledSelect = styled(Select)`
	width: 100%;
	margin-bottom: 24px;
	display: block;
`;

const StyledCheckbox = styled(Checkbox)`
	margin-bottom: 16px;
	width: 100%;
	align-items: flex-start;
`;

const SelectContainer = styled.div`
`;

const SelectCategory: ExclusionCategory[] = [
	'Respeito',
	'Aprendizagem e Crescimento',
	'Equilíbrio entre vida pessoal e profissional',
	'Oportunidades de carreira',
	'Elogio',
	'Outro',
];

const SelectFontes: ExclusionSource[] = [
	'Políticas da Empresa',
	'Lideranças',
	'RH',
	'Colaboradores',
	'Avaliações de Desempenho',
	'Clientes / Parceiros',
	'Outro',
];

type FormPageProps = React.PropsWithoutRef<{
}>;

type FormPageComponent = React.FunctionComponent<FormPageProps>;

function initializeDictExclusionCategory<T> (initialValue: T | (() => T)) {
	const dict: Record<ExclusionCategory, T> = Object.create(null) as any;
	const getInitialValue = () => initialValue instanceof Function ? initialValue() : initialValue;
	ExclusionCategory.forEach(category => { dict[category] = getInitialValue() });
	return dict;
}

function groupExclusionReports (reports: ExclusionReport[]) {
	const dict = initializeDictExclusionCategory<ExclusionReport[]>(() => []);

	console.log('start', dict);
	reports.forEach(report => {
		dict[report.category].push(report);
	});
	console.log('end', dict);

	return dict;
}

function generateExclusionReportsLength (min: number, max: number) {
	const dict = initializeDictExclusionCategory(0);
	for (const key of Object.keys(dict) as ExclusionCategory[]) {
		dict[key] = Math.floor(Math.random() * (max - min) + min);
	}
	return dict;
}

const FormPage: FormPageComponent = ({  }) => {
	const [category, setCategory] = React.useState<ExclusionCategory | null>(null);
	const [source, setSource] = React.useState<ExclusionSource | null>(null);
	const [isFirstJob, setIsFirstJob] = React.useState<boolean>(false);

	const [postData, { error, loading }] = usePostData({});

	const [exclusionReports, setExclusionReports] = useLocalStorage<ExclusionReport[]>('my-exclusion-reports', []);
	const [exclusionReportsLength, setExclusionReportsLength] = useLocalStorage<Record<ExclusionCategory, number>>(
		'categories-numbers',
		() => generateExclusionReportsLength(100, 300),
	);

	React.useEffect(() => {
		if (error) toast.error(error.message);
	}, [error]);

	React.useEffect(() => {
		router.prefetch('/confirmation');
	}, []);

	const router = useRouter();

	function handleExit () {
		router.push('/confirmation');
	}

	function validateData (message: string) {
		const problems: string[] = [];

		if (!category) problems.push('Você deve selecionar uma categoria');
		if (!source) problems.push('Você deve selecionar uma fonte');
		if (!message) problems.push('Você deve escrever uma mensagem');
		if (message && message.length < 10) problems.push('Sua mensagem deve ser mais longa');

		return problems;
	}

	function generateProblemsReactNode (problems: string[]) {
		return <>
			{problems.map(problem => <div key={problem}>{problem}</div>)}
		</>;
	}

	async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const messageElem = (event.target as HTMLFormElement).message as HTMLTextAreaElement;
		const message = messageElem.value;

		const problems = validateData(message);

		if (problems.length > 0) {
			toast.error(generateProblemsReactNode(problems));
			return;
		}

		const report: ExclusionReport = {
			message,
			category: category!,
			source: source!,
			isFirstJob: isFirstJob!,
		};

		const success = await postData(report);
		if (!success) return;

		setExclusionReports([...exclusionReports, report ]);
		toast.success('Experiência enviada com sucesso!');
	}

	const groupedReports = groupExclusionReports(exclusionReports);

	return (
		<Root>
			<ExclusionCategoriesContainer>
				<ExclusionCard
					category='Respeito'
					color={theme => theme.colors.yellow.main}
					mySubmissions={groupedReports.Respeito.length}
					totalSubmissions={exclusionReportsLength.Elogio}
				/>
				<ExclusionCard
					category='Aprendizagem e Crescimento'
					color={theme => theme.colors.orange.main}
					mySubmissions={groupedReports['Aprendizagem e Crescimento'].length}
					totalSubmissions={exclusionReportsLength['Aprendizagem e Crescimento']}
				/>
				<ExclusionCard
					category='Equilíbrio entre vida pessoal e profissional'
					color={theme => theme.colors.pink.main}
					mySubmissions={groupedReports['Equilíbrio entre vida pessoal e profissional'].length}
					totalSubmissions={exclusionReportsLength['Equilíbrio entre vida pessoal e profissional']}
				/>
				<ExclusionCard
					category='Oportunidades de carreira'
					color={theme => theme.colors.green.main}
					mySubmissions={groupedReports['Oportunidades de carreira'].length}
					totalSubmissions={exclusionReportsLength['Oportunidades de carreira']}
				/>
				<ExclusionCard
					category='Elogio'
					color={theme => theme.colors.blue.main}
					mySubmissions={groupedReports.Elogio.length}
					totalSubmissions={exclusionReportsLength.Elogio}
				/>
				<ExclusionCard
					category='Outro'
					color={theme => theme.colors.gray.main}
					mySubmissions={groupedReports.Outro.length}
					totalSubmissions={exclusionReportsLength.Elogio}
				/>
			</ExclusionCategoriesContainer>
			<MainContent>
				<HeaderText>
					Esse ambiente foi projetado para que você possa se expressar livremente
					e com segurança. Reserve um momento para refletir sobre suas experiências
					pessoais no ambiente de trabalho. Você pode relatar momentos de dificildade,
					exclusão, assim como ocasiões especiais. Lembre-se de selecionar pelo menos
					uma Categoria em que sua experiência se encaixa, e uma Fonte nos menus
					laterais antes de enviar sua experiência. É possível enviar quantas respostas
					desejar.
				</HeaderText>
				<Card>
					<CardTitle>Experiência pessoal</CardTitle>
					<Hr />
					<Form onSubmit={handleSubmit}>
						<TextArea name='message' placeholder='Por favor, descreva sua experiência...' />
						<ControlArea>
							<SelectContainer>
								<StyledSelect
									onChange={value => setCategory(value as ExclusionCategory)}
									fullWidth
									options={SelectCategory}
								/>
								<StyledSelect
									onChange={value => setSource(value as ExclusionSource)}
									fullWidth
									options={SelectFontes}
								/>
								<StyledCheckbox onChange={setIsFirstJob}>
									Este é o meu primeiro emprego, estágio ou programa de treinee.
								</StyledCheckbox>
							</SelectContainer>
							<ActionButtonsContainer>
								<ActionButton type='submit' loading={loading}>Enviar</ActionButton>
								<ActionButton type='button' onClick={handleExit}>Sair</ActionButton>
							</ActionButtonsContainer>
						</ControlArea>
					</Form>
				</Card>
			</MainContent>
		</Root>
	);
}

export default FormPage;