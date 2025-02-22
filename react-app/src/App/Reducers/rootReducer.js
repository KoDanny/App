import { combineReducers } from 'redux';
import { controlPanelReducer } from './controlPanelReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
	controlPanel: controlPanelReducer,
	tasks: tasksReducer,
});
