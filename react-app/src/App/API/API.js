import { TASKS_URL } from '../Constants';

const getRequest =
	(method) =>
	async ({ id, ...taskData } = {}) => {
		const options = {
			method,
			headers: {
				'Content-type': 'application/json;charset=utf-8',
			},
			body:
				method === 'POST' || method === 'PATCH'
					? JSON.stringify({ completed: false, ...taskData })
					: null,
		};

		const URL = id !== undefined ? `${TASKS_URL}/${id}` : TASKS_URL;

		try {
			const response = await fetch(URL, options);
			return await response.json();
		} catch (e) {
			throw new Error(`Фигня какая-то с запросом - ${e}`);
		}
	};

export const createTaskAsync = getRequest('POST');
export const readTaskAsync = getRequest('GET');
export const updateTaskAsync = getRequest('PATCH');
export const deleteTaskAsync = getRequest('DELETE');
