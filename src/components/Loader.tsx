/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

const Loader: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator animating={true} size={100} color="#900" />
    </View>
  );
};

export default Loader;
