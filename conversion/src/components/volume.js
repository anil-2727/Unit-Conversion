import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Card} from 'react-native-elements';
import volumeStyles from '../css/volumeCss';
import { measureVolume } from '../services/quantityMeasurementBL';


const VolumeMeasurement = ({navigation}) => {
  const [pickerValueFrom, selectedValueFrom] = useState(pickerValueFrom);
  const [pickerValueTo, selectedValueTo] = useState(pickerValueTo);
  const [userInput, setUserInput] = useState('');
  const [result, setOutput] = useState('');

  const calculateVolume = (pickerValueTo) => {
          selectedValueTo(pickerValueTo);
          return measureVolume(userInput, pickerValueFrom, pickerValueTo);
  }

  return (
    <ScrollView style={{width: '100%', marginBottom:20}}>
      <Text style={volumeStyles.heading}>Choose Type</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>
        
        <Card containerStyle={volumeStyles.cardStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/scale-1.png')} style={volumeStyles.cardImg}/>
            <Text numberOfLines={1} style={volumeStyles.cardText}>Length</Text>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={volumeStyles.cardStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Temperature')}>
            <Image source={require('../assets/hot-1.png')} style={volumeStyles.cardImg}/>
            <Text numberOfLines={1} style={volumeStyles.cardText}>Temperature</Text>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={volumeStyles.volumeCard}>
          <TouchableOpacity>
            <Image source={require('../assets/beaker.png')} style={volumeStyles.cardImg} />
            <Text numberOfLines={1} style={volumeStyles.cardText}>Volume</Text>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'stretch', width:'85%', alignSelf:'center' }}>

        <View style={{width:'50%', justifyContent: 'center', marginVertical:20, marginHorizontal:10}}>
            <Text style={{marginBottom:5}}>From: {pickerValueFrom}</Text>
            <Card containerStyle={{width:'100%', padding:0, margin:0}}>
              <TextInput style={volumeStyles.input} placeholder="From" keyboardType="numeric"  onChangeText={userInput => setUserInput(userInput)}/>

              <View style={volumeStyles.picker}>
                <Picker onValueChange={(itemValue) => selectedValueFrom(itemValue)} selectedValue={pickerValueFrom}>
                  <Picker.Item label="milliLiter" value="milliLiter" />
                  <Picker.Item label="liter" value="liter" />
                  <Picker.Item label="cubicInch" value="cubicInch" />
                  <Picker.Item label="cubicFoot" value="cubicFoot" />
                  <Picker.Item label="cubicMeter" value="cubicMeter" />
              </Picker>
              </View>

          </Card>
        </View>

        <View style={{width:'50%', justifyContent: 'center', marginVertical:20, marginHorizontal:10}}>
          <Text style={{marginBottom:5}}>To: {pickerValueTo}</Text>
          <Card containerStyle={{width:'100%', padding:0, margin:0}}>
            <TextInput style={volumeStyles.input} >{result}</TextInput>
            <View style={volumeStyles.picker}>
              <Picker onValueChange={itemValue => {let output = calculateVolume(itemValue); console.log(output); setOutput(output)}} selectedValue = {pickerValueTo}>
                <Picker.Item label="milliLiter" value="milliLiter" />
                <Picker.Item label="liter" value="liter" />
                <Picker.Item label="cubicInch" value="cubicInch" />
                <Picker.Item label="cubicFoot" value="cubicFoot" />
                <Picker.Item label="cubicMeter" value="cubicMeter" />
              </Picker>
            </View>
          
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default VolumeMeasurement;
