import { AuthState } from './types';

const authReducer = {
  SET_AUTH: (state: AuthState, payload: AuthState) => {
    return {
      ...state,
      ...payload,
    };
  },
};

export default authReducer;
