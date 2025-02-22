export const filterTask = (tasks, phrase) =>
	tasks.filter(({ title }) => title.includes(phrase));
