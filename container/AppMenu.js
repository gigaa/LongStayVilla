import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Navbar from './Navbar';
import Booking from '../components/Booking';
import BookingConfirm from '../components/BookingConfirm';

const Stack = createStackNavigator();

export default function AppMenu() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="BookingConfirm" component={BookingConfirm} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}