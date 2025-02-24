import { Container } from '../Custom';
import { AddPanel } from './Components/AddPanel/AddPanel';
import { SearchPanel } from './Components/SearchPanel/SearchPanel';
import { SortPanel } from './Components/SortPanel/SortPanel';

export const ControlPanel = () => {
	return (
		<Container>
			<AddPanel />
			<SearchPanel />
			<SortPanel />
		</Container>
	);
};
