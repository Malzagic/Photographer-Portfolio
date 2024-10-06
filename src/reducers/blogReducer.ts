import { FETCHING_ACTIONS } from "../actions";

export const initialState = {
  data: [],
  loading: false,
  error: null,
};

export function blogReducer(state: any, action: any) {
  switch (action.type) {
    case FETCHING_ACTIONS.PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCHING_ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case FETCHING_ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  }
}
