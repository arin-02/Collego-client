import axios from 'axios';
import {AnyAction, Dispatch} from '@reduxjs/toolkit';
const serverUrl = 'https://collego-server-host.onrender.com';

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch({type: 'loginRequest'});
      const {data} = await axios.post(
        `${serverUrl}/login`,
        {email, password},
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
      dispatch({type: 'loginSuccess', payload: data});
    } catch (error: any) {
      dispatch({type: 'loginFailure', payload: error.response?.data?.message});
    }
  };

export const loadUser = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch({type: 'loadUserRequest'});
    const {data} = await axios.get(`${serverUrl}/me`);
    dispatch({type: 'loadUserSuccess', payload: data});
  } catch (error: any) {
    dispatch({type: 'loadUserFailure', payload: error.response?.data?.message});
  }
};

export const addTask =
  (title: string, description: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: 'addTaskRequest'});
      const {data} = await axios.post(
        `${serverUrl}/addtask`,
        {
          title,
          description,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
      dispatch({type: 'addTaskSuccess', payload: data.message});
    } catch (error: any) {
      dispatch({
        type: 'addTaskFailure',
        payload: error.response?.data?.message,
      });
    }
  };

export const updateTask =
  (taksId: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: 'updateTaskRequest'});
      const {data} = await axios.get(`${serverUrl}/task/${taksId}`);
      dispatch({type: 'updateTaskSuccess', payload: data.message});
    } catch (error: any) {
      dispatch({
        type: 'updateTaskFailure',
        payload: error.response?.data?.message,
      });
    }
  };

export const deleteTask =
  (taksId: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: 'deleteTaskRequest'});
      const {data} = await axios.delete(`${serverUrl}/task/${taksId}`);
      dispatch({type: 'deleteTaskSuccess', payload: data.message});
    } catch (error: any) {
      dispatch({
        type: 'deleteTaskFailure',
        payload: error.response?.data?.message,
      });
    }
  };

export const updateProfile =
  (formData: any) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: 'updateProfileRequest'});
      const {data} = await axios.put(`${serverUrl}/updateprofile`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      dispatch({type: 'updateProfileSuccess', payload: data.message});
    } catch (error: any) {
      dispatch({
        type: 'updateProfileFailure',
        payload: error.response?.data?.message,
      });
    }
  };

export const updatePassword =
  (oldPassword: string, newPassword: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: 'updatePasswordRequest'});
      const {data} = await axios.put(
        `${serverUrl}/updatepassword`,
        {oldPassword, newPassword},
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
      dispatch({type: 'updatePasswordSuccess', payload: data.message});
    } catch (error: any) {
      dispatch({
        type: 'updatePasswordFailure',
        payload: error.response?.data?.message,
      });
    }
  };
export const register =
  (formData: any) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: 'registerRequest'});
      const {data} = await axios.post(`${serverUrl}/register`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      dispatch({type: 'registerSuccess', payload: data.message});
    } catch (error: any) {
      dispatch({
        type: 'registerFailure',
        payload: error.response?.data?.message,
      });
    }
  };

export const logout = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch({type: 'logoutRequest'});
    await axios.get(`${serverUrl}/logout`);
    dispatch({type: 'logoutSuccess'});
  } catch (error: any) {
    dispatch({
      type: 'logoutFailure',
      payload: error.response?.data?.message,
    });
  }
};
