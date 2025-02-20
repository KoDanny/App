import { Field, Information, ControlPanel } from './Components';
import { useSelector } from 'react-redux';
import { selectIsGameEnded } from './Selectors';

export const App = () => {
	const isGameEnded = useSelector(selectIsGameEnded);

	return (
		<div>
			<Information>Информация</Information>
			<Field />
			{isGameEnded && <ControlPanel />}
		</div>
	);
};

// ✖ ⭘
