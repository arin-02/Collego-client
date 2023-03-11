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
  registerRequest: state => {
    state.loading = true;
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  registerFailure: (state, action) => {
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
  logoutRequest: state => {
    state.loading = true;
  },
  logoutSuccess: state => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    // state.message = action.payload.message;
  },
  logoutFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  },
  clearError: state => {
    state.error = null;
  },
  clearMessage: state => {
    state.message = null;
  },
});

export const messageReducer = createReducer(initialState, {
  addTaskRequest: state => {
    state.loading = true;
  },
  addTaskSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  addTaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updateTaskRequest: state => {
    state.loading = true;
  },
  updateTaskSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateTaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  deleteTaskRequest: state => {
    state.loading = true;
  },
  deleteTaskSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteTaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updateProfileRequest: state => {
    state.loading = true;
  },
  updateProfileSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updatePasswordRequest: state => {
    state.loading = true;
  },
  updatePasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updatePasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: state => {
    state.error = null;
  },
  clearMessage: state => {
    state.message = null;
  },
});
