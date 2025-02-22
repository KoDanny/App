import { useEffect } from 'react';
import { Container } from '../Components/Container/Container';
import { TasksListItem } from './Components/TasksListItem/TasksListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsSortingEnable,
	selectSearchInputValue,
	selectTasks,
} from '../../Selectors';
import * as actionCreators from '../../actionCreators';
import { sortTask, filterTask } from '../../utils';

export const TasksList = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);

	useEffect(() => {
		dispatch(actionCreators.getTasks());
	}, [dispatch]);

	const isSortingEnable = useSelector(selectIsSortingEnable);
	const searchPhrase = useSelector(selectSearchInputValue);

	const sortedTasks = sortTask(tasks, isSortingEnable);
	const tasksList = filterTask(sortedTasks, searchPhrase);

	const children = tasksList.map(({ id, title, completed }) => {
		return <TasksListItem key={id} {...{ id, title, completed }} />;
	});

	return <Container>{children}</Container>;
};
