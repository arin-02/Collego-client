import {createReducer} from '@reduxjs/toolkit';
interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  user: any;
  message: string | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  error: null,
};

export const authReducer = createReducer(initialState, {
  loginRequest: state => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  loadUserRequest: state => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    // state.message = action.payload.message;
  },
  loadUserFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  clearError: state => {
    state.error = null;
  },
  clearMessage: state => {
    state.message = null;
  },
});
