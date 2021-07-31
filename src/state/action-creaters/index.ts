import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const mockApiCall = (term?: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADING,
    });
    try {
      setTimeout(() => {
        dispatch({
          type: ActionType.VALID_INPUT_FIELDS,
          payload: 'Success!',
        });
      }, 2000);
    } catch (err) {
      dispatch({
        type: ActionType.INVALID_INPUT_FIELDS,
        payload: err.message,
      });
    }
  };
};
export const toggleTheme = () => (dispatch: Dispatch, getState: any) => {
  dispatch({
    type: ActionType.TOGGLE_THEME,
  });
  localStorage.setItem(
    'isDarkTheme',
    JSON.stringify(getState().toggleTheme.isDarkTheme)
  );
};
