import { ActionType } from '../action-types';
import { Action } from '../actions';

interface IState {
  loading: boolean;
  isValidFields: boolean;
  error: string | null;
  data: string;
}

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionType.LOADING:
      return { loading: true, isValidFields: true, error: null, data: '' };
    case ActionType.VALID_INPUT_FIELDS:
      return {
        loading: false,
        isValidFields: true,
        error: null,
        data: action.payload,
      };
    case ActionType.INVALID_INPUT_FIELDS:
      return {
        loading: false,
        isValidFields: false,
        error: action.payload,
        data: '',
      };
    default:
      return state;
  }
};

export default reducer;
