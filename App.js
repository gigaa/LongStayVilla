import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './container/Login';
// import Navbar from './container/Navbar';
import Home from './components/Home';
import Location from './components/Location';
import Booking from './components/Booking';
import BookingConfirm from './components/BookingConfirm';
import SingleVilla from './components/SingleVilla';
import Profile from './components/Profile';
import More from './components/More';

import reducer from "./reducer";
// redux stuff
import { createStore } from "redux";

import { Provider } from "react-redux";

const store = createStore(
  reducer,
);


const Stack = createStackNavigator();

export default function App() {
  console.log('store',store.getState().signle_villa.price);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="BookingConfirm" component={BookingConfirm} />   
          <Stack.Screen name="SingleVilla" component={SingleVilla} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="More" component={More} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
