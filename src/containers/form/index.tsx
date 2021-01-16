import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/button';
import Checkbox from '../../components/atoms/checkbox';
import Select from '../../components/atoms/select';
import ExclusionCategory from './exclusion-category';

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
	font-size: 16px;
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
`;

const StyledCheckbox = styled(Checkbox)`
	margin-bottom: 16px;
	width: max-content;
`;

const SelectCategory = [
	'Respeito',
	'Aprendizagem e Crescimento',
	'Equilíbrio entre vida pessoal e profissional',
	'Oportunidades de carreira',
	'Elogio',
	'Outro',
];

const SelectFontes = [
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

const FormPage: FormPageComponent = ({  }) => {
	return (
		<Root>
			<ExclusionCategoriesContainer>
				<ExclusionCategory
					name='Respeito'
					color={theme => theme.colors.yellow.main}
				/>
				<ExclusionCategory
					name='Aprendizagem e Crescimento'
					color={theme => theme.colors.orange.main}
				/>
				<ExclusionCategory
					name='Equilibrio entre vida pessoal e profissional'
					color={theme => theme.colors.pink.main}
				/>
				<ExclusionCategory
					name='Oportunidades de carreira'
					color={theme => theme.colors.green.main}
				/>
				<ExclusionCategory
					name='Elogio'
					color={theme => theme.colors.blue.main}
				/>
				<ExclusionCategory
					name='Outro'
					color={theme => theme.colors.gray.main}
				/>
			</ExclusionCategoriesContainer>
			<MainContent>
				<HeaderText>
					Reserve um momento para refletir sobre as suas experiências pessoais
					dentro do ambiente de trabalho. Houve alguma ocasião em que sentiu um
					tratamento diferente? Já passou por algum momento de exclusão no ambiente
					de trabalho? Ou muito pelo contrário, você pode ter experenciado ocasiões
					muito especiais dentro da empresa em que trabalha. Esse ambiente foi
					projetado para que você possa se expressar livremente e com segurança.
					Lembre-se de selecionar pelo menos uma Categoria e uma Fonte nos menus
					laterais antes de enviar sua experiência. É possível enviar quantas
					respostas desejar. Ao finalizar, clique em “Sair”.
				</HeaderText>
				<Card>
					<CardTitle>Experiência pessoal</CardTitle>
					<Hr />
					<StyledCheckbox>
						Este é o meu primeiro emprego, estágio ou programa de treinee.
					</StyledCheckbox>
					<Form>
						<TextArea placeholder='Por favor, descreva sua experiência...' />
						<ControlArea>
							<StyledSelect options={SelectCategory} />
							<StyledSelect options={SelectFontes} />
							<ActionButtonsContainer>
								<ActionButton>Enviar</ActionButton>
								<ActionButton>Sair</ActionButton>
							</ActionButtonsContainer>
						</ControlArea>
					</Form>
				</Card>
			</MainContent>
		</Root>
	);
}

export default FormPage;