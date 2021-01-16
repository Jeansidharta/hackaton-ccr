import React from 'react';
import MultistepProvider from './context';
import PageRenderer from './page-renderer';

type MultistepFormProps = React.PropsWithoutRef<{
	pages: React.ReactNode[],
	onSubmit?: (formValue: Object) => void,
}>;

type MultistepFormComponent = React.FunctionComponent<MultistepFormProps>;

const MultistepForm: MultistepFormComponent = ({
	pages,
	onSubmit,
}) => {
	return (
		<MultistepProvider maxStage={pages.length - 1}>
			<PageRenderer onSubmit={onSubmit} pages={pages} />
		</MultistepProvider>
	);
}

export default MultistepForm;