import React from 'react';
import { useMultistep } from './context';

type PageRendererProps = React.PropsWithoutRef<{
	pages: React.ReactNode[];
	onSubmit?: (formValue: Object) => void,
}>;

type PageRendererComponent = React.FunctionComponent<PageRendererProps>;

const PageRenderer: PageRendererComponent = ({
	pages,
	onSubmit = () => {},
}) => {
	const { stage, hasSubmited, formValue } = useMultistep();

	React.useEffect(() => {
		if (hasSubmited) onSubmit(formValue);
	}, [hasSubmited]);

	return <>{pages[stage]}</>;
}

export default PageRenderer;