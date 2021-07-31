import { ActionType } from '../action-types';
import { Action } from '../actions';

interface IState {
  isLoading: boolean;
  isValidFields: boolean;
  error: string | null;
  data: string;
}

const initialState = {
  isLoading: false,
  error: null,
  data: '',
  isValidFields: false,
};

const reducer = (state: IState = initialState, action: Action): IState => {
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
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
