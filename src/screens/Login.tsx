/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/Action';
import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {RootState} from '../redux/Store';

type LoginProps = NativeStackNavigationProp<RoutePathList, 'REGISTER'>;
const Login = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const navigation = useNavigation<LoginProps>();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const {error} = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    // console.log('=>', isAuthenticated);
    if (error) {
      Alert.alert(error);
      dispatch({type: 'clearError'});
    }
  }, [error, dispatch]);
  const loginHandler = () => {
    // console.log(email, pass);
    console.log('login done');
    dispatch<any>(login(email, pass));
  };

  return (
    <View
      style={{
        marginTop: '50%',
      }}>
      <Text style={styles.textt}>WELCOME</Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          value={pass}
          onChangeText={setPass}
        />
      </View>
      <Button
        disabled={!email || !pass}
        style={styles.btn}
        onPress={loginHandler}>
        <Text
          style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}
          onPress={loginHandler}>
          Login
        </Text>
      </Button>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          marginTop: 10,
          fontWeight: '600',
        }}>
        Or
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('REGISTER', {pic: ''})}>
        <Text style={styles.signuptext}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FORGOTPASSWORD')}>
        <Text style={{margin: 20, alignSelf: 'center', fontWeight: '500'}}>
          Forgot Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textt: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#900',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    width: '70%',
    borderColor: '#b5b5b5',
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#900',
    marginTop: 10,
    padding: 5,
    width: '70%',
    borderRadius: 0,
    alignSelf: 'center',
  },
  signuptext: {
    color: '#900',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Login;
