import React from 'react';

type MultistepContext = {
	stage: number,
	nextStage: () => void,
	prevStage: () => void,
	setStage: (stage: number) => void,
	formValue: Object,
	updateFormValue: (formValueToAppend: Object) => void,
	submit: () => void,
	hasSubmited: boolean,
};

const context = React.createContext<MultistepContext>(null as any);

type MultistepProviderProps = {
	maxStage: number,
};

type MultistepProviderComponent = React.FunctionComponent<MultistepProviderProps>

const MultistepProvider: MultistepProviderComponent = ({ maxStage, ...props }) => {
	const [formValue, setFormValue] = React.useState<Object>({});
	const [stage, rawSetStage] = React.useState<number>(0);
	const [hasSubmited, setHasSubmited] = React.useState<boolean>(false);

	function nextStage () {
		rawSetStage(stage => Math.min(stage + 1, maxStage));
	}

	function prevStage () {
		rawSetStage(stage => Math.max(stage - 1, 0));
	}

	function setStage (newStage: number) {
		rawSetStage(Math.min(maxStage, Math.max(0, newStage)));
	}

	function updateFormValue (formValueToAppend: Object) {
		setFormValue({ ...formValue, ...formValueToAppend });
	}

	function submit () {
		setHasSubmited(true);
	}

	return <context.Provider value={{
		stage,
		nextStage,
		prevStage,
		setStage,
		formValue,
		updateFormValue,
		hasSubmited,
		submit,
	}} {...props} />;
}

const useMultistep = () => {
	return React.useContext(context);
}

export { useMultistep };
export default MultistepProvider;