export const ExclusionCategory = [
	'Respeito',
	'Aprendizagem e Crescimento',
	'Equilíbrio entre vida pessoal e profissional',
	'Oportunidades de carreira',
	'Elogio',
	'Outro',
] as const;

export type ExclusionCategory = (typeof ExclusionCategory)[number];

export const ExclusionSource = [
	'Políticas da Empresa',
	'Lideranças',
	'RH',
	'Colaboradores',
	'Avaliações de Desempenho',
	'Clientes / Parceiros',
	'Outro',
] as const;

export type ExclusionSource = (typeof ExclusionSource)[number];

export type ExclusionReport = {
	category: ExclusionCategory,
	source: ExclusionSource,
	isFirstJob: boolean,
	message: string,
};