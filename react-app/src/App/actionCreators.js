import {
	UPDATE_TASK,
	ADD_TASK,
	GET_TASKS,
	REMOVE_TASK,
	SET_ADD_INPUT_VALUE,
	SET_CURRENT_EDIT_TASK_ID,
	SET_IS_SORT_ENABLE,
	SET_SEARCH_INPUT_VALUE,
} from './Constants';
import * as Request from './API';

const actionCreator = (type) => (payload) => {
	const requests = {
		GET_TASKS: Request.readTask,
		REMOVE_TASK: Request.deleteTask,
		ADD_TASK: Request.createTask,
		UPDATE_TASK: Request.updateTask,
	};

	const getCallback = (type, payload) => async (dispatch) => {
		if (type !== GET_TASKS) {
			await requests[type]({ ...payload });
		}
		const tasks = await Request.readTask();
		dispatch({ type, payload: tasks });
	};

	return requests[type] ? getCallback(type, payload) : { type, payload };
};

export const setAddInputValue = actionCreator(SET_ADD_INPUT_VALUE);
export const setSearchInputValue = actionCreator(SET_SEARCH_INPUT_VALUE);
export const setIsSortingEnable = actionCreator(SET_IS_SORT_ENABLE);
export const setCurrentEditTaskId = actionCreator(SET_CURRENT_EDIT_TASK_ID);

export const getTasks = actionCreator(GET_TASKS);
export const createTask = actionCreator(ADD_TASK);
export const removeTask = actionCreator(REMOVE_TASK);
export const updateTask = actionCreator(UPDATE_TASK);
