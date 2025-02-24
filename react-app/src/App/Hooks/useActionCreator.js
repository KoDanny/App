import { useSelector } from 'react-redux';
import { selectTasks } from '../Selectors';
import { updateTasks, deleteTask, addTask } from '../utils';
import {
	GET_TASKS,
	SET_ADD_INPUT_VALUE,
	SET_SEARCH_INPUT_VALUE,
	SET_CURRENT_EDIT_TASK_ID,
	SET_IS_SORT_ENABLE,
	ADD_TASK,
	REMOVE_TASK,
	UPDATE_TASK,
} from '../Constants';
import * as Request from '../API';

export const useActionCreator = () => {
	const tasks = useSelector(selectTasks);

	const actionCreator = (type) => (payload) => {
		const actionMap = {
			GET_TASKS: { request: Request.readTaskAsync },
			REMOVE_TASK: {
				request: Request.deleteTaskAsync,
				action: deleteTask,
			},
			ADD_TASK: {
				request: Request.createTaskAsync,
				action: addTask,
			},
			UPDATE_TASK: { request: Request.updateTaskAsync, action: updateTasks },
		};

		const getCallback = (type, payload) => async (dispatch) => {
			let newTasks = [];
			if (type !== GET_TASKS) {
				const newTaskData = await actionMap[type].request({ ...payload });
				newTasks = actionMap[type].action(tasks, newTaskData);
			} else {
				newTasks = await actionMap[type].request();
			}
			dispatch({ type, payload: newTasks });
		};

		return actionMap[type]?.request ? getCallback(type, payload) : { type, payload };
	};

	// return Object.values({ ...ACTION_NAMES }).reduce(
	// 	(acc, actionName) => (acc[actionName] = actionCreator(actionName)),
	// 	{},
	// );

	return {
		setAddInputValue: actionCreator(SET_ADD_INPUT_VALUE),
		setSearchInputValue: actionCreator(SET_SEARCH_INPUT_VALUE),
		setIsSortingEnable: actionCreator(SET_IS_SORT_ENABLE),
		setCurrentEditTaskId: actionCreator(SET_CURRENT_EDIT_TASK_ID),

		getTasks: actionCreator(GET_TASKS),
		createTask: actionCreator(ADD_TASK),
		removeTask: actionCreator(REMOVE_TASK),
		updateTask: actionCreator(UPDATE_TASK),
	};
};
