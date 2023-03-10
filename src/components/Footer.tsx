import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {RoutePathList} from '../../Main';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type FooterRoute = NativeStackNavigationProp<RoutePathList, 'PROFILE'>;

const Footer = () => {
  const navigation = useNavigation<FooterRoute>();

  return (
    <View style={styles.FooterContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
        <Icon name="home" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PROFILE')}>
        <Icon name="user" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  FooterContainer: {
    padding: 20,
    backgroundColor: 'rgb(50,50,50)',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default Footer;
