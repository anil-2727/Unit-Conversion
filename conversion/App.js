/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useColorScheme, SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppBar from './src/components/header';
import LengthMeasurement from './src/components/length';
import TempMeasurement from './src/components/temperature';
import VolumeMeasurement from './src/components/volume';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F6FA'}}>
      <AppBar></AppBar>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={LengthMeasurement}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Temperature"
            component={TempMeasurement}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Volume"
            component={VolumeMeasurement}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
