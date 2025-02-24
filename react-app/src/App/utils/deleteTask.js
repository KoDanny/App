import { findTaskIndex } from './findTaskIndex';

export const deleteTask = (tasks, { id }) => {
	const newTasks = [...tasks];
	const index = findTaskIndex(tasks, id);
	newTasks.splice(index, 1);
	return newTasks;
};
