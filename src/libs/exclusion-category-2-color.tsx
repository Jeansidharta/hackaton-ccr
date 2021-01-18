import { DefaultTheme } from "styled-components";
import { ExclusionCategory } from "../models/exclusion-report";

export function exclusionCategory2Color ({ colors }: DefaultTheme, category: ExclusionCategory) {
	return {
		'Respeito': colors.yellow.main,
		'Aprendizagem e Crescimento': colors.orange.main,
		'Equilíbrio entre vida pessoal e profissional': colors.pink.main,
		'Oportunidades de carreira': colors.green.main,
		'Elogio': colors.blue.main,
		'Outro': colors.gray.main,
	}[category];
}