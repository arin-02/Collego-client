/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type CameraProps = NativeStackNavigationProp<RoutePathList, 'REGISTER'>;
type CameraScreenRouteProp = RouteProp<RoutePathList, 'CAMERA'>;

const Camera: React.FC = () => {
  const navigation = useNavigation<CameraProps>();
  const route = useRoute<CameraScreenRouteProp>();

  console.log('====>paramsCamera===>', route.params?.updateProfile);

  const takeFromGallery = () => {
    console.log('Take from Gallery');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      console.log(img.path);
      if (route.params?.updateProfile) {
        return navigation.navigate('PROFILE', {pic: img.path});
      } else {
        return navigation.navigate('REGISTER', {pic: img.path});
      }
    });
  };
  const takeFromCamera = () => {
    console.log('Take from Camera');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      console.log(img.path);
      if (route.params?.updateProfile) {
        return navigation.navigate('PROFILE', {pic: img.path});
      } else {
        return navigation.navigate('REGISTER', {pic: img.path});
      }
    });
  };

  return (
    <View>
      <Text style={{alignItems: 'center', alignSelf: 'center', fontSize: 20}}>
        Choose one option
      </Text>
      <Button onPress={takeFromGallery}>PICK FROM GALLERY</Button>
      <Button onPress={takeFromCamera}>PICK FROM CAMERA</Button>
    </View>
  );
};

export default Camera;
