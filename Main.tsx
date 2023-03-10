import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Footer from './src/components/Footer';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';
import Camera from './src/screens/Camera';

export type RoutePathList = {
  HOME: undefined;
  LOGIN: undefined;
  PROFILE: undefined;
  REGISTER: {pic: string};
  CAMERA: undefined;
};

const Stack = createNativeStackNavigator<RoutePathList>();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="REGISTER">
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
          name="CAMERA"
          component={Camera}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default Main;
