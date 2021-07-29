import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
      },
      root: {
        backgroundColor: '#393c3d',
        color: '#fff',
      },
    },
  },
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
  },
  shape: {
    borderRadius: 5,
  },
});
