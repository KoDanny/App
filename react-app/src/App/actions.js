import {
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_DRAW,
	SET_GAME_ENDED,
	SET_WIN_PATTERN,
	RESET,
} from './Constants';

const createAction = (type) => (payload) => ({
	type,
	payload,
});

export const setCurrentPlayer = createAction(SET_CURRENT_PLAYER);
export const setField = createAction(SET_FIELD);
export const setGameEnded = createAction(SET_GAME_ENDED);
export const setDraw = createAction(SET_DRAW);
export const reset = createAction(RESET);
export const setWinPattern = createAction(SET_WIN_PATTERN);
