/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RoutePathList} from '../../Main';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {register} from '../redux/Action';
import mime from 'mime';
type RegisterProps = RouteProp<RoutePathList, 'REGISTER'>;

const Register: React.FC = () => {
  const route = useRoute<RegisterProps>();
  const dispatch = useDispatch();
  const {pic} = route.params;
  const [avatar, setAvatar] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RoutePathList, 'REGISTER'>>();
  const handleImage = () => {
    console.log('handleImage');
  };
  const registerHandler = () => {
    console.log(name, email, pass);
    console.log('===>', pic);

    const myForm = new FormData();
    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('password', pass);
    myForm.append('avatar', {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split('/').pop(),
    });
    dispatch<any>(register(myForm));
  };
  useEffect(() => {
    if (pic) {
      setAvatar(pic);
    } else {
      setAvatar('');
    }
  }, [pic]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 50,
        justifyContent: 'center',
      }}>
      <ScrollView>
        <Avatar.Image
          size={100}
          source={{uri: avatar ? avatar : undefined}}
          style={{backgroundColor: '#900', alignSelf: 'center'}}
        />
        <TouchableOpacity onPress={handleImage}>
          <Text
            style={{
              color: '#900',
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}
            onPress={() =>
              navigation.navigate('CAMERA', {
                updateProfile: false,
                pic: route.params.pic,
              })
            }>
            Change Photo
          </Text>
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
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
          style={styles.btn}
          disabled={!name || !email || !pass}
          onPress={registerHandler}>
          <Text style={{color: '#fff', fontSize: 20}}>Register</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('LOGIN')}>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 10,
              fontWeight: '500',
              fontSize: 16,
            }}>
            Have an Account, <Text style={{color: '#900'}}>Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
export default Register;
