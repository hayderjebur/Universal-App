import { AppBar, Toolbar, Paper, IconButton } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export default function Navbar() {
  const { toggleTheme } = useActions();
  const { isDarkTheme } = useTypedSelector((state) => state.toggleTheme);

  const icon = isDarkTheme ? <Brightness3Icon /> : <Brightness7Icon />;

  return (
    <Paper>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton
            edge='end'
            color='secondary'
            aria-label='mode'
            onClick={() => toggleTheme()}
          >
            {icon}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
