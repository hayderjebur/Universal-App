import { Provider } from 'react-redux';
import { store } from '../state';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
