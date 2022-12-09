import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main.jsx';
import Login from './src/screens/Login';
const Stack = createNativeStackNavigator();
export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
)
}