import { combineReducers } from 'redux';
import userInputReducer from './userInputsReducer';
import ThemeToggleReducer from './ThemeToggleReducer';

const reducers = combineReducers({
  userInputs: userInputReducer,
  toggleTheme: ThemeToggleReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
