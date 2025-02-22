import { Button, Input } from '../../../../Components';
import styles from './Styles.module.css';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../../../../actionCreators';

export const Task = ({ title, completed, id }) => {
	const dispatch = useDispatch();

	const onCompletedCheckboxChange = async ({ target }) => {
		dispatch(actionCreators.updateTask({ id, completed: target.checked }));
	};

	const onDeleteButtonClick = () => {
		dispatch(actionCreators.removeTask({ id }));
	};

	const onEditButtonClick = () => {
		dispatch(actionCreators.setCurrentEditTaskId(id));
	};

	return (
		<div className={styles.container}>
			<p className={styles.text}>{title}</p>
			<div className={styles.buttonContainer}>
				<Input
					type="checkbox"
					checked={completed}
					onChange={onCompletedCheckboxChange}
				/>
				<Button onClick={onDeleteButtonClick}>✖</Button>
				<Button onClick={onEditButtonClick}>✎</Button>
			</div>
		</div>
	);
};
