import React from 'react';
import LGPDModalService from './lgpd-modal';
import Modal from './modal';

type ServicesComponent = React.FunctionComponent;

const Services: ServicesComponent = () => {
	return (
		<>
			<Modal />
			<LGPDModalService />
		</>
	);
}

export default Services;