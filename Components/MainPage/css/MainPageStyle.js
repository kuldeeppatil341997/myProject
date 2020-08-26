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
  inputBox: {
    height: 40,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal:30,
    fontSize:16,
    color:'black',
    marginVertical: 15
  },
  button: {
    width:300,
    backgroundColor:'#65CCB8',
     borderRadius: 25,
      marginVertical: 15,
      paddingVertical: 15
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'black',
    textAlign:'center'
  },
  logo : {
    fontSize : 30,
    fontWeight : '600',
    color : 'white',
  },
  signUp : {
    fontSize : 16,
    color : 'white',
    paddingVertical : 15
  },
  forgotPassword : {
    fontSize : 18,
    color : 'white',
    paddingVertical : 15
  }
});
