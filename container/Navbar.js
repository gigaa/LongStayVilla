import * as React from 'react';
import { Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from "../components/Home";
import Location from "../components/Location";
import Booking from "../components/Booking";
import Profile from "../components/Profile";
import More from "../components/More";

// import { useNavigation } from '@react-navigation/core';

// const navigation = useNavigation();

const Tab = createBottomTabNavigator();

export default function Navbar({navigation}) {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options= {{
          tabBarIcon: (tabInfo) => {
            return (
              <Icon name="home" size={30} color={tabInfo.focused && "#B2002D" } />
            )},
            tabBarActiveTintColor: '#B2002D',
            tabBarInactiveTintColor: 'gray',
        }} />
        <Tab.Screen name="Location" component={Location}
          options= {{
            color: '#B2002D',
            tabBarIcon: (tabInfo) => {
              return (
                <Icon name="search1" size={30} color={tabInfo.focused && "#B2002D" } />
              )},
              tabBarActiveTintColor: '#B2002D',
              tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen name="Booking" component={Booking}
          options= {{
            color: '#B2002D',
            tabBarIcon: (tabInfo) => {
              return (
                <Icon name="hearto" size={30} color={tabInfo.focused && "#B2002D" } />
              )},
              tabBarActiveTintColor: '#B2002D',
              tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
          options= {{
            color: '#B2002D',
            tabBarIcon: (tabInfo) => {
              return (
                <Icon name="user" size={30} color={tabInfo.focused && "#B2002D" } />
              )},
              tabBarActiveTintColor: '#B2002D',
              tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen name="More" component={More}
          options= {{
            color: '#B2002D',
            tabBarIcon: (tabInfo) => {  
              return (
                <Icon name="bars" size={30} color={tabInfo.focused && "#B2002D" } />
              )},
              tabBarActiveTintColor: '#B2002D',
              tabBarInactiveTintColor: 'gray',
          }}
        />
      </Tab.Navigator>
  );
}