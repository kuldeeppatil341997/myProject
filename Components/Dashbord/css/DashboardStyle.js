import {
    StyleSheet,
  } from 'react-native';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
            width: (deviceWidth),
            padding: 20,
            backgroundColor: 'lightblue',
            paddingTop: 120,
    },
    contentContainerStyle : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    footer :{
        position : "fixed",
        bottom: 0,
        width: '100%',
        height: 50,
        marginBottom : 7
    }
  })
  