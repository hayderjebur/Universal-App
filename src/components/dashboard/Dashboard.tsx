import Navbar from '../navbar/Navbar';
import Form from '../form/Form';
import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, Paper } from '@material-ui/core';
import { grey, blue } from '@material-ui/core/colors';
import styled from 'styled-components';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const StyledPaper = styled(Paper)`
  height: 100vh;
`;

const Dashboard: React.FC = (): JSX.Element => {
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
      <StyledPaper>
        <Navbar />
        <Form />
      </StyledPaper>
    </MuiThemeProvider>
  );
};

export default Dashboard;
