import {StyleSheet} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const tempStyles = StyleSheet.create({
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    padding: 10,
  },

  cardStyle: {
    borderRadius: 7,
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  cardImg: {
    resizeMode:'contain',
    alignSelf:'center'
  },

  cardText: {
    marginTop: 10, 
    fontSize:15,
    fontFamily: 'Montserrat-Regular', 
    // width:'100%'
  },

  temperatureCard: {
    borderRadius: 7,
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#FD5160',
    backgroundColor: '#FFEEF0' 
  },

  lengthCard: {
    borderRadius: 7,
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#0EC098',
    backgroundColor: '#EDFDF9' 
  },

  volumeCard: {
    borderRadius: 7,
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#7224FF',
    backgroundColor: '#E8DDFF' 
  },
  
  input: {
    borderColor:'#E7DCFE',
    fontWeight:'bold',
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    paddingLeft: 10,
  },

  picker:{
    height: 40,
    paddingVertical:25,
    justifyContent:'center'
  }
});

export default tempStyles;
