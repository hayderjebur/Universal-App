import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import useStyles from './useStyle';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Form: React.FC = () => {
  const classes = useStyles();

  interface IUserInfo {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    errors: {
      firstName: string;
      middleName: string;
      lastName: string;
      email: string;
    };
  }
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    errors: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
    },
  });
  const [disable, setDisable] = useState(true);
  const { errors, firstName, middleName, lastName, email } = userInfo;

  //Actions
  const { mockApiCall } = useActions();
  //State
  const { isDarkTheme } = useTypedSelector((state) => state.toggleTheme);
  const { isLoading, isValidFields } = useTypedSelector(
    (state) => state.userInputs
  );
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  useEffect(() => {
    if (firstName && lastName && email && errors.email === '') {
      setDisable(false);
    }
  }, [userInfo]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length < 4
            ? 'First Name must be at least 4 characters long!'
            : '';
        break;

      case 'lastName':
        errors.lastName =
          value.length < 4
            ? 'Last name must be at least 4 characters long!'
            : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      default:
        break;
    }
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mockApiCall();
  };

  // const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography className={classes.title} component='h1' variant='h5'>
          User Info
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <TextField
            id='firstName'
            label={
              <Typography className={classes.label}>First Name</Typography>
            }
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name='firstName'
            autoComplete='firstName'
            autoFocus
            helperText={errors.firstName}
            error={errors.firstName.length > 0 && Boolean(errors.firstName)}
            value={firstName}
            onChange={handleChange}
          />
          <TextField
            id='middleName'
            label={
              <Typography className={classes.label}>Middle Name</Typography>
            }
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name='middleName'
            autoComplete='middleName'
            autoFocus
            value={middleName}
            onChange={handleChange}
          />
          <TextField
            id='lastName'
            label={<Typography className={classes.label}>Last Name</Typography>}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name='lastName'
            autoComplete='lastName'
            autoFocus
            helperText={errors.lastName}
            error={errors.lastName.length > 0 && Boolean(errors.lastName)}
            value={lastName}
            onChange={handleChange}
          />
          <TextField
            id='email'
            label={
              <Typography className={classes.label}>E-mail address</Typography>
            }
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name='email'
            autoComplete='email'
            helperText={errors.email}
            error={errors.email.length > 0 && Boolean(errors.email)}
            value={email}
            onChange={handleChange}
          />

          <Box textAlign='center'>
            <Button
              disabled={disable}
              type='submit'
              size='large'
              variant='contained'
              //color='primary'
              className={isDarkTheme ? classes.darkBtn : classes.submit}
            >
              {isLoading ? (
                <CircularProgress style={{ color: 'white' }} />
              ) : (
                'Submit'
              )}
            </Button>
          </Box>
        </form>
      </Paper>
    </main>
  );
};
export default Form;
