import {
    StyleSheet,
  } from 'react-native';
import { color } from 'react-native-reanimated';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
  
export default StyleSheet.create({
    container: {
        flex : 1,
        flexDirection: "column",
        height : '100%',
        width : '100%',
    },
    block : {
        height: 250,
        width :( deviceWidth-40 ),
       // color : "black" ,
        backgroundColor : "red" ,
        marginVertical : 10,
        //textAlign:"center",
        borderRadius: 20,
        borderWidth: 2   
    },
    innerBlock1 : {
        height : '70%',
        width : '100%',
        backgroundColor : "white",
        borderTopStartRadius : 20,
        borderTopEndRadius : 20
    },
    innerBlock2 : {

    }

  })
  