import Navbar from '../navbar/Navbar';
import Form from '../form/Form';
import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, Paper } from '@material-ui/core';
import { grey, blue } from '@material-ui/core/colors';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const Dashboard: React.FC = () => {
  const { isDarkTheme } = useTypedSelector((state) => state.toggleTheme);
  const greyPrimary = grey['600'];
  const greySecondary = grey['300'];

  //Light Theme Sitting
  const themeLight = createTheme({
    palette: {
      type: 'light',
      primary: blue,
      secondary: {
        main: '#e3f2fd',
      },
    },
  });
  //Dark Theme Sitting
  const themeDark = createTheme({
    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: ' 2px 2px 10px black',
        },
      },
    },
    palette: {
      type: 'dark',
      primary: {
        main: greyPrimary,
      },
      secondary: {
        main: greySecondary,
      },
    },
  });

  return (
    <MuiThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Paper style={{ height: '100vh' }}>
        <Navbar />
        <Form />
      </Paper>
    </MuiThemeProvider>
  );
};

export default Dashboard;
