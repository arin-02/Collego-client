/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Button} from 'react-native-paper';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
import {loadUser, logout, updateProfile} from '../redux/Action';
import mime from 'mime';
import Loader from '../components/Loader';
type ProfileNavigationProps = NativeStackNavigationProp<
  RoutePathList,
  'CHANGEPASSWORD'
>;
type CameraScreenRouteProp = RouteProp<RoutePathList, 'CAMERA'>;
const Profile: React.FC = () => {
  const {user, loading} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const route = useRoute<CameraScreenRouteProp>();
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState<string>(user.avatar.url);
  const navigation = useNavigation<ProfileNavigationProps>();

  console.log('params===>', route.params?.pic, user.avatar.url);
  const handleImage = () => {
    console.log('handleImage');
    navigation.navigate('CAMERA', {
      updateProfile: true,
      pic: route.params?.pic || '',
    });
  };
  const submitHandler = () => {
    console.log('submitHandler');
    const myForm = new FormData();
    myForm.append('name', name);
    myForm.append('avatar', {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split('/').pop(),
    });
    dispatch<any>(updateProfile(myForm));
    dispatch<any>(loadUser());
  };

  const logoutHandler = () => {
    console.log('logoutHandler');
    dispatch<any>(logout());
  };
  // useEffect(() => {
  //   console.log('handleImage134inside profile');
  //   if (user.avatar.url) {
  //     setAvatar(user.avatar.url);
  //   } else {
  //     setAvatar('');
  //   }
  // }, [route, user.avatar.url]);

  useEffect(() => {
    if (route.params) {
      if (route.params.pic) {
        setAvatar(route.params.pic);
      }
    }
  }, [route]);

  return loading ? (
    <Loader />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <Avatar.Image
          size={100}
          source={{uri: avatar ? avatar : undefined}}
          style={{backgroundColor: '#900', alignSelf: 'center', marginTop: 50}}
        />
        <TouchableOpacity onPress={handleImage}>
          <Text
            style={{
              color: '#900',
              marginTop: 10,
              alignSelf: 'center',
              marginBottom: 10,
            }}>
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
        </View>
        <Button style={styles.btn} onPress={submitHandler}>
          <Text style={{color: '#fff', fontSize: 20}}>Update</Text>
        </Button>
        <Button
          style={{marginTop: 10}}
          onPress={() => navigation.navigate('CHANGEPASSWORD')}>
          <Text
            style={{
              color: 'rgb(50, 50, 50)',
              fontSize: 18,
            }}>
            Change Password
          </Text>
        </Button>
        <Button onPress={logoutHandler}>
          <Text
            style={{
              color: 'rgb(50, 50, 50)',
              fontSize: 15,
            }}>
            Logout
          </Text>
        </Button>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    color: '#900',
    borderWidth: 2,
    width: '70%',
    padding: 10,
    alignSelf: 'center',
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
export default Profile;
