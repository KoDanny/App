import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../Selectors';
import styles from './Information.module.css';
import { useSelector } from 'react-redux';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const resultGame = isDraw ? 'Ничья' : `Победил игрок ${currentPlayer}`;

	const message = isGameEnded ? resultGame : `Сейчас ходит: ${currentPlayer}`;

	return (
		<div className={styles.container}>
			{isGameEnded && <p className={styles.text}>Игра окончена!</p>}
			<p className={styles.text}>{message}</p>
		</div>
	);
};
