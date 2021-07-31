import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  darkBtn: {
    backgroundColor: '#393c3d',
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 46,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    //background: '#fff',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },

  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  inputs: {
    marginTop: '.8rem',
    height: '1rem',
    padding: '5px',
  },

  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 46,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#3a8dff',
    fontWeight: 'bold',
    color: '#fff',
  },
  formControl: {
    marginTop: '1rem ',
    height: '8rem',
    padding: '5px',
    minWidth: 120,
  },
  title: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
}));

export default useStyles;
