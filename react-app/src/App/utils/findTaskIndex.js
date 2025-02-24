export const findTaskIndex = (tasks, taskId) =>
	tasks.findIndex(({ id }) => id === taskId);
