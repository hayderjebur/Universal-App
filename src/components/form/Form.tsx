import React, { useState } from 'react';
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

const Form: React.FC = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
  });
  //Actions
  const { fetchUsers, toggleTheme } = useActions();
  //State
  const { isDarkTheme } = useTypedSelector((state) => state.userInputs);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Call dispatch here
    //fetchUsers()
  };
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
            //helperText={touched.username ? errors.username : ''}
            //error={touched.username && Boolean(errors.username)}
            //value={values.username}
            //onChange={handleChange}
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
            //helperText={touched.username ? errors.username : ''}
            //error={touched.username && Boolean(errors.username)}
            //value={values.username}
            //onChange={handleChange}
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
            //helperText={touched.username ? errors.username : ''}
            //error={touched.username && Boolean(errors.username)}
            //value={values.username}
            //onChange={handleChange}
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
            // helperText={touched.email ? errors.email : ''}
            // error={touched.email && Boolean(errors.email)}
            // value={values.email}
            // onChange={handleChange}
          />

          <Box textAlign='center'>
            <Button
              type='submit'
              size='large'
              variant='contained'
              //color='primary'
              className={isDarkTheme ? classes.darkBtn : classes.submit}
            >
              {'isSubmitting' ? (
                'Submit'
              ) : (
                <CircularProgress style={{ color: 'white' }} />
              )}
            </Button>
          </Box>
        </form>
      </Paper>
    </main>
  );
};
export default Form;
