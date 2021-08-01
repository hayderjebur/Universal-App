import { Provider } from 'react-redux';
import { store } from '../state';
import Dashboard from './dashboard/Dashboard';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
