import {
	GET_TASKS,
	ADD_TASK,
	REMOVE_TASK,
	SET_CURRENT_EDIT_TASK_ID,
	UPDATE_TASK,
} from '../Constants';
import { INIT_TASKS_STATE } from '../Constants/State';

export const tasksReducer = (state = INIT_TASKS_STATE, { type, payload }) => {
	switch (type) {
		case ADD_TASK:
		case GET_TASKS:
		case REMOVE_TASK:
		case UPDATE_TASK:
			return { ...state, tasks: [...payload] };
		case SET_CURRENT_EDIT_TASK_ID:
			return { ...state, currentEditTaskId: payload };
		default:
			return state;
	}
};
