import React from 'react';
import LGPDModal from '../../components/modals/lgpd';
import { useModal } from '../../contexts/modal';
import { useLocalStorage } from '../../libs/hooks/use-local-storage';

type LGPDModalServiceComponent = React.FunctionComponent;

const LGPDModalService: LGPDModalServiceComponent = ({  }) => {
	const { openModal } = useModal();
	const [hasSeenLGPD, setHasSeenLGPD] = useLocalStorage('has-seen-lgpd-modal');

	React.useEffect(() => {
		if (hasSeenLGPD === 'true') return;

		openModal(
			<LGPDModal onSubmit={() => setHasSeenLGPD('true')} />,
			{ backdropClickClose: false }
		);
	}, [hasSeenLGPD]);

	return <React.Fragment />
}

export default LGPDModalService;