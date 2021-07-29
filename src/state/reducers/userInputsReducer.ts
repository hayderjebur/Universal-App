import { ActionType } from '../action-types';
import { Action } from '../actions';

interface IState {
  loading: boolean;
  isValidFields: boolean;
  error: string | null;
  data: string;
  isDarkTheme: boolean;
}

const initialState = {
  loading: false,
  error: null,
  data: '',
  isValidFields: false,
  isDarkTheme: false,
};

const reducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        loading: true,
        isValidFields: true,
        isDarkTheme: true,
        error: null,
        data: '',
      };
    case ActionType.VALID_INPUT_FIELDS:
      return {
        loading: false,
        isValidFields: true,
        isDarkTheme: false,
        error: null,
        data: action.payload,
      };
    case ActionType.INVALID_INPUT_FIELDS:
      return {
        loading: false,
        isValidFields: false,
        isDarkTheme: false,
        error: action.payload,
        data: '',
      };
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

export default reducer;
