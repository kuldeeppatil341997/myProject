
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

class Logo extends Component{

    render(){
      return(
        <View>
            <Text style={styles.logo} >Saloon App</Text>
      </View>
      )
    }
  }
  
  export default Logo;