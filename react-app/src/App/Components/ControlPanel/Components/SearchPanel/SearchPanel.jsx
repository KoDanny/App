import { Container, Button, Input } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchInputValue } from '../../../../Selectors';
import * as actionCreators from '../../../../actionCreators';

export const SearchPanel = () => {
	const dispatch = useDispatch();
	const inputValue = useSelector(selectSearchInputValue);

	const onChange = ({ target }) =>
		dispatch(actionCreators.setSearchInputValue(target.value));

	const onResetButtonClick = () => dispatch(actionCreators.setSearchInputValue(''));

	return (
		<Container display="flex">
			<Input type="text" value={inputValue} onChange={onChange} />
			<Button onClick={onResetButtonClick}>Сбросить</Button>
		</Container>
	);
};
