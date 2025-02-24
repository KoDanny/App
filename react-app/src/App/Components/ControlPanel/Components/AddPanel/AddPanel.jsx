import { Container, Button, Input } from '../../../Custom';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputAddValue } from '../../../../Selectors';
import { useActionCreator } from '../../../../Hooks';

export const AddPanel = () => {
	const actionCreators = useActionCreator();
	const dispatch = useDispatch();
	const inputValue = useSelector(selectInputAddValue);

	const onInputAddChange = ({ target }) => {
		dispatch(actionCreators.setAddInputValue(target.value));
	};

	const onButtonAddClick = async () => {
		// dispatch(actionCreators.createTask({ title: inputValue }));
		dispatch(actionCreators.setters.ADD_TASK({ title: inputValue }));
		dispatch(actionCreators.setAddInputValue(''));
	};

	return (
		<Container display="flex">
			<Input type="text" value={inputValue} onChange={onInputAddChange} />
			<Button onClick={onButtonAddClick}>Добавить</Button>
		</Container>
	);
};
