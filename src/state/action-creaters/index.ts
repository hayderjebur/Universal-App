import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const fetchUsers = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADING,
    });
    try {
      //TO DO:
      //wait for two mins
      dispatch({
        type: ActionType.VALID_INPUT_FIELDS,
        payload: 'Success!',
      });
    } catch (err) {
      dispatch({
        type: ActionType.INVALID_INPUT_FIELDS,
        payload: err.message,
      });
    }
  };
};
export const toggleTheme = () => (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.TOGGLE_THEME,
  });
};
