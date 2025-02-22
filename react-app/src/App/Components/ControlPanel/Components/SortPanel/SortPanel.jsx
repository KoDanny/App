import { useDispatch, useSelector } from 'react-redux';
import { Container, Input } from '../../../Components';
import { selectIsSortingEnable } from '../../../../Selectors';
import * as actionCreators from '../../../../actionCreators';

export const SortPanel = () => {
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
