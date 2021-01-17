import { useLocalStorage } from "../../libs/hooks/use-local-storage";
import { ExclusionCategory, ExclusionReport, ExclusionSource } from "../../models/exclusion-report";

type ReportsAmmount = Record<
	ExclusionCategory,
	Record<ExclusionSource | 'length', number>
>;

function initializeDictExclusionCategory<T> (initialValue: T | (() => T)) {
	const dict: Record<ExclusionCategory, T> = Object.create(null) as any;
	const getInitialValue = () => initialValue instanceof Function ? initialValue() : initialValue;
	ExclusionCategory.forEach(category => { dict[category] = getInitialValue() });
	return dict;
}

function groupExclusionReports (reports: ExclusionReport[]) {
	const dict = initializeDictExclusionCategory<ExclusionReport[]>(() => []);

	reports.forEach(report => {
		dict[report.category].push(report);
	});

	return dict;
}

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
	const [exclusionReports, setExclusionReports] = useLocalStorage<ExclusionReport[]>('my-exclusion-reports', []);
	const [reportsAmmount, setReportsAmmount] = useLocalStorage<ReportsAmmount>(
		'categories-numbers',
		() => generateExclusionReportsLength(100, 300),
	);

	const exclusionReportsGroupedByCategory = groupExclusionReports(exclusionReports);

	function addReportTo (category: ExclusionCategory, source: ExclusionSource) {
		setReportsAmmount({
			...reportsAmmount,
			[category]: {
				...reportsAmmount[category],
				[source]: reportsAmmount[category][source] + 1,
				length: reportsAmmount[category].length + 1,
			},
		});
	}

	return {
		exclusionReports,
		reportsAmmount,
		exclusionReportsGroupedByCategory,
		setReportsAmmount,
		setExclusionReports,
		addReportTo,
	};
}