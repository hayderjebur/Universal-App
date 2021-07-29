import { ActionType } from '../action-types';

export type Action = LoadingAction | ValidFieldsAction | InvalidFieldsAction;

export interface LoadingAction {
  type: ActionType.LOADING;
}
export interface ValidFieldsAction {
  type: ActionType.VALID_INPUT_FIELDS;
  payload: string;
}
export interface InvalidFieldsAction {
  type: ActionType.INVALID_INPUT_FIELDS;
  payload: string;
}
