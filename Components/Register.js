import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation'

class Register extends React.Component{

  render(){
    return(
      <View>
        <Text>This is Register...</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('MainPage')}
        />
    </View>
    )
  }
}

export default withNavigation(Register);