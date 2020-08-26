import {
    StyleSheet,
  } from 'react-native';
import { deviceWidth } from '../LoaderComponent';

export default StyleSheet.create({
    container: {
      position: 'absolute',
      top: 50,
      width: deviceWidth - 40,
      left: 20,
      zIndex: 99,
      backgroundColor: 'white'
    },
    formField: {
      borderWidth: 1,
      padding: 12,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 20,
      borderColor: '#888888',
      fontSize: 18,
      height: 50
    }
  })
  