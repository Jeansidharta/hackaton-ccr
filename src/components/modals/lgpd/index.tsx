import React from 'react';
import { useModal } from '../../../contexts/modal';
import MultistepForm from '../../atoms/multistep-form';
import Intro from './0-intro';
import Gurantees1 from './1-guarantees';
import Gurantees2 from './2-guarantees';

type LGPDModalProps = {
	onSubmit?: () => void,
};

type LGPDModalComponent = React.FunctionComponent<LGPDModalProps>;

const LGPDModal: LGPDModalComponent = ({
	onSubmit = () => {},
}) => {
	const { closeModal } = useModal();

	function handleSubmit () {
		closeModal();
		onSubmit();
	}

	return (
		<MultistepForm
			onSubmit={handleSubmit}
			pages={[
				<Intro />,
				<Gurantees1 />,
				<Gurantees2 />,
			]}
		/>
	);
}

export default LGPDModal;