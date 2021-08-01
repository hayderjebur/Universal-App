import { ActionType } from '../action-types';
import { Action } from '../actions';
import { IInitialState } from '../../interface/state';

const initialState = {
  isLoading: false,
  error: null,
  isValidFields: false,
};

const reducer = (
  state: IInitialState = initialState,
  action: Action
): IInitialState => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.VALID_INPUT_FIELDS:
      return {
        ...state,
        isLoading: false,
        isValidFields: true,
      };
    case ActionType.INVALID_INPUT_FIELDS:
      return {
        ...state,
        isValidFields: false,
      };

    default:
      return state;
  }
};

export default reducer;
