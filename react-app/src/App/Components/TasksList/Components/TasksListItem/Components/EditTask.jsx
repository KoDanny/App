import { useState } from 'react';
import { Button, Input } from '../../../../Custom';
import styles from './Styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../../../../../Selectors';
import { useActionCreator } from '../../../../../Hooks';

export const EditTask = ({ title, id, completed }) => {
	const [value, setValue] = useState(title);
	const tasks = useSelector(selectTasks);
	const actionCreators = useActionCreator();
	const dispatch = useDispatch();

	const onSaveButtonClick = async () => {
		dispatch(actionCreators.updateTask({ id, completed, title: value }, tasks));
		dispatch(actionCreators.setCurrentEditTaskId(null));
	};

	return (
		<div className={styles.container}>
			<Input
				type="text"
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
			<div className={styles.buttonContainer}>
				<Button onClick={onSaveButtonClick}>✔</Button>
			</div>
		</div>
	);
};
