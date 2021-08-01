import { ActionType } from '../action-types';
import { Action } from '../actions';

interface IState {
  isDarkTheme: boolean;
}

const initialState = {
  isDarkTheme: JSON.parse(localStorage.getItem('isDarkTheme') || ''),
};

const ThemeToggleReducer = (
  state: IState = initialState,

  action: Action
): IState => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME:
      return {
        isDarkTheme: !state.isDarkTheme,
      };

    default:
      return state;
  }
};

export default ThemeToggleReducer;
