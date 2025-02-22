import { Container, Button, Input } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddInputValue } from '../../../../Selectors';
import * as actionCreators from '../../../../actionCreators';

export const AddPanel = () => {
	const dispatch = useDispatch();
	const inputValue = useSelector(selectAddInputValue);

	const onInputAddChange = ({ target }) => {
		dispatch(actionCreators.setAddInputValue(target.value));
	};

	const onButtonAddClick = async () => {
		dispatch(actionCreators.createTask({ title: inputValue }));
		dispatch(actionCreators.setAddInputValue(''));
	};

	return (
		<Container display="flex">
			<Input type="text" value={inputValue} onChange={onInputAddChange} />
			<Button onClick={onButtonAddClick}>Добавить</Button>
		</Container>
	);
};
