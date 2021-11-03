import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Card} from 'react-native-elements';
import tempStyles from '../css/temperatureCss';
import { tempMeasurement } from '../services/quantityMeasurementBL';


const TempMeasurement = ({navigation}) => {
  const [pickerValueFrom, selectedValueFrom] = useState('');
  const [pickerValueTo, selectedValueTo] = useState('');
  const [userInput, setUserInput] = useState('');
  const [result, setOutput] = useState('');

  const calculateTemperature = (pickerValueTo) => {
          selectedValueTo(pickerValueTo);
          return tempMeasurement(userInput, pickerValueFrom, pickerValueTo);
  }

  return (
    <ScrollView style={{width: '100%', marginBottom:20}}>
      <Text style={tempStyles.heading}>Choose Type</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>

        <Card containerStyle={tempStyles.cardStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/scale-1.png')} style={tempStyles.cardImg}/>
            <Text numberOfLines={1} style={tempStyles.cardText}>Length</Text>
          </TouchableOpacity>
        </Card>
        
        <Card containerStyle={tempStyles.temperatureCard}>
          <TouchableOpacity>
            <Image source={require('../assets/hot.png')} style={tempStyles.cardImg}/>
            <Text numberOfLines={1} style={tempStyles.cardText}>Temperature</Text>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={tempStyles.cardStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Volume')}>
            <Image source={require('../assets/beaker-1.png')} style={tempStyles.cardImg} />
            <Text numberOfLines={1} style={tempStyles.cardText}>Volume</Text>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'stretch', width:'85%', alignSelf:'center' }}>
        <View style={{width:'50%', justifyContent: 'center',  marginVertical:20, marginHorizontal:10}}>
          <Text style={{marginBottom:5}}>From: {pickerValueFrom}</Text>
          <Card containerStyle={{width:'100%', padding:0, margin:0}}>
            <TextInput style={tempStyles.input} placeholder="From" keyboardType="numeric" onChangeText={userInput => setUserInput(userInput)}/>

            <View style= {tempStyles.picker}>
              <Picker onValueChange={(itemValue) => selectedValueFrom(itemValue)} selectedValue={pickerValueFrom}>

                  <Picker.Item label="&#8451;" value="celsius" />
                  <Picker.Item label="&#8457;" value="fahrenheit" />
                  <Picker.Item label="&#xb0;K" value="kelvin" />

              </Picker>
            </View>

          </Card>
        </View>
        <View style={{width:'50%', justifyContent: 'center', marginVertical:20, marginHorizontal:10}}>
          <Text style={{marginBottom:5}}>To: {pickerValueTo}</Text>
          <Card containerStyle={{width:'100%', padding:0, margin:0}}>
            <TextInput style={tempStyles.input} >{result}</TextInput>

            <View style= {tempStyles.picker}>
              <Picker onValueChange={itemValue => {let output = calculateTemperature(itemValue); console.log(output); setOutput(output)}} selectedValue = {pickerValueTo}>
                
                  <Picker.Item label="&#8451;" value="celsius"/>
                  <Picker.Item label="&#8457;" value="fahrenheit"/>
                  <Picker.Item label="&#xb0;K" value="kelvin" />
              </Picker>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default TempMeasurement;
