import {
    StyleSheet,
  } from 'react-native';
  
  export default StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor : '#25274D'
    },
    inputBox : {
        height : 40,
        width : 250,
        backgroundColor : 'transparent',
        paddingHorizontal:20,
        fontSize:16,
        color: 'black',
        marginVertical: 15,
        paddingVertical : 25,
        borderBottomWidth : 2,
        borderBottomColor : 'white'
    },
    getStarted :{
        width:250,
        backgroundColor:'#65CCB8',
        borderRadius: 25,
        marginVertical: 25,
        paddingVertical: 15,
        textAlign: "center",
        fontSize : 16,

    },
    login : {
        fontSize : 16,
        marginVertical : 15
    }
  });
  