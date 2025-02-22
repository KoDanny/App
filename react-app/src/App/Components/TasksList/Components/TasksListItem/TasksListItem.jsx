import { EditTask } from './Components/EditTask';
import { Task } from './Components/Task';
import { useSelector } from 'react-redux';
import { selectCurrentEditTaskId } from '../../../../Selectors/selectCurrentEditTaskId';

export const TasksListItem = (props) => {
	const currentEditTaskId = useSelector(selectCurrentEditTaskId);

	return props.id === currentEditTaskId ? <EditTask {...props} /> : <Task {...props} />;
};
