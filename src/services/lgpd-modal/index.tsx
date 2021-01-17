import React, { useState } from 'react';
import LGPDModal from '../../components/modals/lgpd';
import { useModal } from '../../contexts/modal';

type LGPDModalServiceComponent = React.FunctionComponent;

const LGPDModalService: LGPDModalServiceComponent = ({  }) => {
	const { openModal } = useModal();
	const [hasSeenLGPD, setHasSeenLGPD] = useState<boolean>(false);

	React.useEffect(() => {
		if (hasSeenLGPD) return;

		openModal(
			<LGPDModal onSubmit={() => setHasSeenLGPD(true)} />,
			{ backdropClickClose: false }
		);
	}, [hasSeenLGPD]);

	return <React.Fragment />
}

export default LGPDModalService;