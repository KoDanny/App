import styles from './Field.module.css';
import * as actionCreator from '../../actions';
import { getWinPattern, updateField } from '../../utils';
import { WIN_PATTERNS } from '../../Constants';
import { Cells } from './Components/Cells/Cells';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayer, selectField, selectIsGameEnded } from '../../Selectors';

export const Field = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const onClick = ({ target: { id, textContent } }) => {
		if (!id || textContent || isGameEnded) return;

		const updatedField = updateField(field, id, currentPlayer);
		const pattern = getWinPattern(updatedField, WIN_PATTERNS);

		if (pattern) {
			dispatch(actionCreator.setGameEnded(true));
			dispatch(actionCreator.setWinPattern(pattern));
		} else if (!updatedField.includes('')) {
			dispatch(actionCreator.setDraw(true));
			dispatch(actionCreator.setGameEnded(true));
		} else {
			const player = currentPlayer === '✖' ? '⭘' : '✖';
			dispatch(actionCreator.setCurrentPlayer(player));
		}
		dispatch(actionCreator.setField(updatedField));
	};

	return (
		<div onClick={onClick} className={styles.container}>
			<Cells />
		</div>
	);
};
