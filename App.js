import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main.jsx';
import Login from './src/screens/Login.jsx';
import Register from './src/screens/Register.jsx';
import Home from './src/screens/Home.jsx';
const Stack = createNativeStackNavigator();
export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MyTinerary" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
)
}