import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Register from '../Register';
import MainPage from '../MainPage/MainPage';
import ForgotPassword from '../MainPage/ForgotPassword';
import SignUp from '../MainPage/SignUp';
import Dashboard from '../Dashbord/Dashboard';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="MainPage" component={MainPage} />
        <Stack.Screen  options={{headerShown: false}} name="Register" component={Register} />
        <Stack.Screen  options={{headerShown: false}} name="SignUp" component={SignUp} />
        <Stack.Screen  options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen  options={{headerShown: false}} name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;