/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import {useNavigation} from '@react-navigation/native';
import {forgetPassword} from '../redux/Action';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
type ForgetPasswordProps = NativeStackNavigationProp<
  RoutePathList,
  'FORGOTPASSWORD'
>;
const ForgotPassword: React.FC = () => {
  const navigation = useNavigation<ForgetPasswordProps>();
  const {loading} = useSelector((state: RootState) => state.message);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const forgortPasswordHandler = async () => {
    await dispatch<any>(forgetPassword(email));
    navigation.navigate('RESETPASSWORD');
  };
  return (
    <View
      style={{
        marginTop: '50%',
      }}>
      <Text style={styles.textt}>FORGOT PASSWORD</Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Button
        style={styles.btn}
        onPress={forgortPasswordHandler}
        disabled={loading || !email}>
        <Text style={{color: '#fff'}}>Send Email</Text>
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
  signuptext: {
    color: '#900',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ForgotPassword;
