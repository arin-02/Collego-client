import {View, Text} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import {useNavigation} from '@react-navigation/native';
type CameraProps = NativeStackNavigationProp<RoutePathList, 'REGISTER'>;
const Camera: React.FC = () => {
  const navigation = useNavigation<CameraProps>();

  const takeFromGallery = () => {
    console.log('Take from Gallery');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      console.log(img.path);
      return navigation.navigate('REGISTER', {pic: img.path});
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
      return navigation.navigate('REGISTER', {pic: img.path});
    });
  };

  return (
    <View>
      <Text>Camera</Text>
      <Button onPress={takeFromGallery}>PICK FROM GALLERY</Button>
      <Button onPress={takeFromCamera}>PICK FROM CAMERA</Button>
    </View>
  );
};

export default Camera;
