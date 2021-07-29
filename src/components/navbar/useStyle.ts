import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  darkBG: {
    backgroundColor: '#393c3d',
  },
  blueBG: {
    backgroundColor: '#3a8dff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default useStyles;
