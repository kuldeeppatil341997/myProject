import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation'

class ForgotPassword extends React.Component{

  render(){
    return(
      <View>
        <Text>This is forgot Page...</Text>
    </View>
    )
  }
}

export default withNavigation(ForgotPassword);