/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {loadUser, Verification} from '../redux/Action';

const Verify: React.FC = () => {
  //   const {user};
  const [OTP, setOtp] = useState<string>('');
  const dispatch = useDispatch();
  const verifyHandler = async () => {
    await dispatch<any>(Verification(OTP));
    dispatch<any>(loadUser());
  };
  return (
    <View
      style={{
        marginTop: '50%',
      }}>
      <Text style={styles.textt}>OTP VERIFICATION</Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          value={OTP}
          onChangeText={setOtp}
          keyboardType="numeric"
        />
      </View>
      <Button style={styles.btn} onPress={verifyHandler}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Verify
        </Text>
      </Button>
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
});
export default Verify;
