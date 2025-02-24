import { useEffect } from 'react';
import { Container } from '../Custom/Container/Container';
import { TasksListItem } from './Components/TasksListItem/TasksListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsSortingEnable,
	selectInputSearchValue,
	selectTasks,
} from '../../Selectors';
import { sortTask, filterTask } from '../../utils';
import { useActionCreator } from '../../Hooks';

export const TasksList = () => {
	const actionCreators = useActionCreator();
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);

	useEffect(() => {
		dispatch(actionCreators.getTasks());
	}, [dispatch]);

	const isSortingEnable = useSelector(selectIsSortingEnable);
	const searchPhrase = useSelector(selectInputSearchValue);

	const sortedTasks = sortTask(tasks, isSortingEnable);
	const tasksList = filterTask(sortedTasks, searchPhrase);
	console.log(tasksList);

	const children = tasksList.map(({ id, title, completed }) => {
		return <TasksListItem key={id} {...{ id, title, completed }} />;
	});

	return <Container>{children}</Container>;
};
