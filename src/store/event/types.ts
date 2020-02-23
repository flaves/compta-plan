import { ThunkAction } from 'redux-thunk';

import { State } from '../index';

export const ENABLE_LOADING = `ENABLE_LOADING`;
export const DISABLE_LOADING = `DISABLE_LOADING`;

export interface EventState {
  loading: boolean;
}

interface EnableLoadingAction {
  type: typeof ENABLE_LOADING;
}

interface DisableLoadingAction {
  type: typeof DISABLE_LOADING;
}

export type EventActionTypes = EnableLoadingAction | DisableLoadingAction;

export type EventThunkResult<R> = ThunkAction<
  R,
  State,
  undefined,
  EventActionTypes
>;
