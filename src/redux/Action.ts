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
    const {data} = await axios.post(`${serverUrl}/me`);
    dispatch({type: 'loadUserSuccess', payload: data});
  } catch (error: any) {
    dispatch({type: 'loadUserFailure', payload: error.response?.data?.message});
  }
};
