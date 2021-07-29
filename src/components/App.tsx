import { Provider } from 'react-redux';
import { store } from '../state';
import Form from './form/Form';
import Navbar from './navbar/Navbar';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from '../themes/theme';
import PageContent from '../pageContent/pageContent';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
