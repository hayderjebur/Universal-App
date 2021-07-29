import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import useStyles from './useStyle';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import IconButton from '@material-ui/core/IconButton';
import { Paper, Typography } from '@material-ui/core';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export default function Navbar() {
  const classes = useStyles();

  const { toggleTheme } = useActions();
  const { isDarkTheme } = useTypedSelector((state) => state.userInputs);

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
