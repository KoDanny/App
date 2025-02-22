import { useState } from 'react';
import { Button, Input } from '../../../../Components';
import styles from './Styles.module.css';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../../../../actionCreators';

export const EditTask = ({ title, id, completed }) => {
	const [value, setValue] = useState(title);

	const dispatch = useDispatch();

	const onSaveButtonClick = async () => {
		dispatch(actionCreators.updateTask({ id, completed, title: value }));
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
