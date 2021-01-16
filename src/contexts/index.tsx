import React from 'react';
import ModalProvider from './modal';

type ContextComponent = React.FunctionComponent;

const Context: ContextComponent = ({ children }) => {
	return (
		<ModalProvider>
			{children}
		</ModalProvider>
	);
}

export default Context;