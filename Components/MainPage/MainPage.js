
import React , {Component} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withNavigation } from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity 
  } from 'react-native';
import styles from './css/MainPageStyle';
import Logo from './Logo';

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password : ""
        }
    }

    authenticateUser(){
            this.props.navigation.navigate("Dashboard");
    }


    render(){
        return(
         <View style={styles.container}>
                <Logo />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    placeholderTextColor = "black"
                    selectionColor="grey"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}
                    />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "black"    
                    />  
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress= {() => this.authenticateUser()}>Login</Text>
                </TouchableOpacity>  
                <TouchableOpacity>
                     <Text style={styles.signUp} onPress={() => this.props.navigation.navigate("SignUp")}>Sign Up</Text>
                </TouchableOpacity>  
                <TouchableOpacity>
                     <Text style={styles.forgotPassword} onPress={() => this.props.navigation.navigate("ForgotPassword")}>Forgot Password </Text>
                </TouchableOpacity> 
        </View> 
                
        )
    }
}

export default withNavigation(MainPage);



