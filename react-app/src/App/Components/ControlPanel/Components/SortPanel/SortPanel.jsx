import { useDispatch, useSelector } from 'react-redux';
import { Container, Input } from '../../../Custom';
import { selectIsSortingEnable } from '../../../../Selectors';
import { useActionCreator } from '../../../../Hooks';

export const SortPanel = () => {
	const actionCreators = useActionCreator();
	const dispatch = useDispatch();
	const isSortingEnable = useSelector(selectIsSortingEnable);

	const onSortCheckboxChange = ({ target }) =>
		dispatch(actionCreators.setIsSortingEnable(target.checked));

	return (
		<Container display="flex">
			<label htmlFor="sort-check" style={{ fontSize: '1.2rem' }}>
				Сортировать в алфавитном порядке
			</label>
			<Input
				type="checkbox"
				id="sort-check"
				checked={isSortingEnable}
				onChange={onSortCheckboxChange}
			/>
		</Container>
	);
};
