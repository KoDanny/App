import { Container, Button, Input } from '../../../Custom';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputSearchValue } from '../../../../Selectors';
import { useActionCreator } from '../../../../Hooks';

export const SearchPanel = () => {
	const actionCreators = useActionCreator();
	const dispatch = useDispatch();
	const inputValue = useSelector(selectInputSearchValue);

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
