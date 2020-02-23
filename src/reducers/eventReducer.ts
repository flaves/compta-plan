import {
  DISABLE_LOADING,
  ENABLE_LOADING,
  EventActionTypes,
  EventState,
} from '../store/event/types';

const initialState: EventState = {
  loading: false,
};

const eventReducer = (
  state = initialState,
  action: EventActionTypes
): EventState => {
  switch (action.type) {
    case ENABLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DISABLE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
