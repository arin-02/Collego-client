/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {updatePassword} from '../redux/Action';

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const dispatch = useDispatch();
  const changePasswordHandler = () => {
    console.log(oldPassword, newPassword);
    dispatch<any>(updatePassword(oldPassword, newPassword));
  };
  return (
    <View
      style={{
        marginTop: '50%',
      }}>
      <Text style={styles.textt}>Change Password</Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Old Password(must be 8 characters long)"
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="New Password(must be 8 characters long)"
          value={newPassword}
          onChangeText={setnewPassword}
        />
      </View>
      <Button style={styles.btn} onPress={changePasswordHandler}>
        <Text style={{color: '#fff'}}>LOGIN</Text>
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
export default ChangePassword;
