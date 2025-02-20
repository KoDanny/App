import styles from './ControlPanel.module.css';
import * as action from '../../actions';
import { useDispatch } from 'react-redux';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const onResetButtonClick = () => {
		dispatch(action.reset());
	};

	return (
		<div className={styles.buttonContainer}>
			<button className={styles.button} onClick={onResetButtonClick}>
				Начать заново
			</button>
		</div>
	);
};
