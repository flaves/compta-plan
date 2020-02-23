import {
  DISABLE_LOADING,
  ENABLE_LOADING,
  EventThunkResult,
} from '../store/event/types';

export const enableLoading = (): EventThunkResult<void> => dispatch => {
  dispatch({
    type: ENABLE_LOADING,
  });
};

export const disableLoading = (): EventThunkResult<void> => dispatch => {
  dispatch({
    type: DISABLE_LOADING,
  });
};
