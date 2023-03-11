import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Footer from './src/components/Footer';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';
import Camera from './src/screens/Camera';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './src/redux/Store';
import Loader from './src/components/Loader';
import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {loadUser} from './src/redux/Action';
import ChangePassword from './src/screens/ChangePassword';
import Verify from './src/screens/Verify';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';

export type RoutePathList = {
  HOME: undefined;
  LOGIN: undefined;
  PROFILE: {pic: string};
  REGISTER: {pic: string};
  CAMERA: {updateProfile: boolean; pic: string};
  CHANGEPASSWORD: undefined;
  FORGOTPASSWORD: undefined;
  RESETPASSWORD: undefined;
  VERIFY: undefined;
};

const Stack = createNativeStackNavigator<RoutePathList>();

const Main = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const {isAuthenticated, loading} = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    console.log('===>', isAuthenticated);
    dispatch<any>(loadUser());
  }, [isAuthenticated, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'HOME' : 'LOGIN'}>
        <Stack.Screen
          name="HOME"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LOGIN"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PROFILE" component={Profile} />
        <Stack.Screen
          name="REGISTER"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VERIFY"
          component={Verify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CAMERA"
          component={Camera}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CHANGEPASSWORD"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FORGOTPASSWORD"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RESETPASSWORD"
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {isAuthenticated && <Footer />}
      {/* <Footer /> */}
    </NavigationContainer>
  );
};

export default Main;
