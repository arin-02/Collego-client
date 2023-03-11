/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../redux/Action';
import {RootState} from '../redux/Store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import {useNavigation} from '@react-navigation/native';

type resetPasswordNavigation = NativeStackNavigationProp<
  RoutePathList,
  'LOGIN'
>;

const ResetPassword: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const navigation = useNavigation<resetPasswordNavigation>();
  const {message, error} = useSelector((state: RootState) => state.message);
  const dispatch = useDispatch();
  const resetPasswordHandler = async () => {
    await dispatch<any>(resetPassword(otp, newPassword));
    navigation.navigate('LOGIN');
  };
  useEffect(() => {
    if (message) {
      Alert.alert(message);
      dispatch<any>({type: 'clearMessage'});
    }
    if (error) {
      Alert.alert(error);
      dispatch<any>({type: 'clearError'});
    }
  }, [message, error, dispatch]);

  return (
    <View
      style={{
        marginTop: '50%',
      }}>
      <Text style={styles.textt}>Change Password</Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setnewPassword}
        />
      </View>
      <Button style={styles.btn} onPress={resetPasswordHandler}>
        <Text style={{color: '#fff'}}>RESET PASSWORD</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  textt: {
    fontSize: 22,
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
});
export default ResetPassword;
