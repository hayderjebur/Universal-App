import { AppBar, Toolbar, Paper, IconButton } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useStyles from './useStyle';

export default function Navbar() {
  const classes = useStyles();

  const { toggleTheme } = useActions();
  const { isDarkTheme } = useTypedSelector((state) => state.toggleTheme);

  useEffect(() => {
    const darkThemFromStorage =
      localStorage.getItem('isDarkTheme') &&
      JSON.parse(localStorage.getItem('isDarkTheme') || '');
  }, []);

  const icon = isDarkTheme ? <Brightness3Icon /> : <Brightness7Icon />;

  return (
    <div>
      <AppBar
        className={isDarkTheme ? classes.darkBG : classes.blueBG}
        position='static'
      >
        <Toolbar>
          <Paper className={isDarkTheme ? classes.darkBG : classes.blueBG}>
            <IconButton
              edge='end'
              color='inherit'
              aria-label='mode'
              onClick={() => toggleTheme()}
            >
              {icon}
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
    </div>
  );
}
