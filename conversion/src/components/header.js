import React from 'react';
import {Header} from 'react-native-elements';
import {Text, View} from 'react-native';
import styles from '../css/headerCss';

const AppBar = () => {
  return (
    <View style={{width: '100%'}}>
      <Header
        placement="center"
        centerComponent={{text: 'Quantity Measurement', style: styles.heading}}
      />
    </View>
  );
};

export default AppBar;
