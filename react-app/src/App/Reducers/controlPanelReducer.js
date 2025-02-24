import {
	SET_ADD_INPUT_VALUE,
	SET_SEARCH_INPUT_VALUE,
	SET_IS_SORT_ENABLE,
} from '../Constants';
import { INIT_CONTROL_PANEL_STATE } from '../Constants/State';

export const controlPanelReducer = (
	state = INIT_CONTROL_PANEL_STATE,
	{ type, payload },
) => {
	switch (type) {
		case SET_SEARCH_INPUT_VALUE:
			return { ...state, inputSearchValue: payload };
		case SET_ADD_INPUT_VALUE:
			return { ...state, inputAddValue: payload };
		case SET_IS_SORT_ENABLE:
			return { ...state, isSortingEnable: payload };
		default:
			return state;
	}
};
