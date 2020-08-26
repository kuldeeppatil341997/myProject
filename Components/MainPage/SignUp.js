import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation';
import styles from './css/SignUpStyle';
import Logo from './Logo';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity 
  } from 'react-native';

class SignUp extends React.Component{

  render(){
    return(
          <View style={styles.container}>
                <Logo />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Enter your name"
                    placeholderTextColor = "white"
                    selectionColor="grey"
                    keyboardType="name"
                    />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Phone Number"
                    placeholderTextColor = "white"
                    selectionColor="grey"
                    keyboardType="name"
                />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Choose Password"
                    secureTextEntry={true}
                    placeholderTextColor = "white"    
                />  
                <TouchableOpacity>
                    <Text style={styles.getStarted}>Get Started</Text>
                </TouchableOpacity>  
                <TouchableOpacity>
                     <Text style={styles.login} onPress={() => this.props.navigation.navigate("MainPage")}>Already member? Login</Text>
                </TouchableOpacity>  
          </View>
    )
  }
}

export default withNavigation(SignUp);