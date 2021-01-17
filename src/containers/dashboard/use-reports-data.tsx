import { useLocalStorage } from "../../libs/hooks/use-local-storage";
import { ExclusionCategory, ExclusionSource } from "../../models/exclusion-report";

type ReportsAmmount = Record<
	ExclusionCategory,
	Record<ExclusionSource | 'length', number>
>;

function generateExclusionReportsLength (min: number, max: number) {
	const dict: ReportsAmmount = {} as any;

	for (const category of ExclusionCategory) {
		dict[category] = {} as any;
		let reportsLength = 0;
		for (const source of ExclusionSource) {
			const sourceLength = Math.floor(Math.random() * (max - min) + min);
			dict[category][source] = sourceLength;
			reportsLength += sourceLength;
		}
		dict[category].length = reportsLength;
	}

	return dict;
}

export function useReportsData () {
	const [reportsAmmount] = useLocalStorage<ReportsAmmount>(
		'categories-numbers',
		() => generateExclusionReportsLength(100, 300),
	);

	return {
		reportsAmmount,
	};
}