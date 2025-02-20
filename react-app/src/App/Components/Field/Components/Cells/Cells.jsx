import { useSelector } from 'react-redux';
import styles from './Cells.module.css';
import { selectField, selectWinPattern } from '../../../../Selectors';

export const Cells = () => {
	const winPattern = useSelector(selectWinPattern);
	const field = useSelector(selectField);

	return field.map((cell, index) => {
		let className = styles.cell;

		if (winPattern) {
			className = winPattern.includes(index)
				? styles.cell + ' ' + styles.winCell
				: className;
		}

		return (
			<div className={className} id={index} key={index}>
				{cell}
			</div>
		);
	});
};
