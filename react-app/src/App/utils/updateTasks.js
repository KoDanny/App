import { findTaskIndex } from './findTaskIndex';

export const updateTasks = (tasks, { id, ...payload } = {}) => {
	const newTasks = [...tasks];
	const index = findTaskIndex(tasks, id);
	newTasks[index] = { id, ...payload };
	return newTasks;
};
