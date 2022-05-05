import React,{useState,useEffect} from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text, Alert, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { useNavigation,useIsFocused ,useRoute} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';

const Menu = (props) => {
    let navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute();

    // console.log('route.params.caption= '+JSON.stringify(route.name));

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.nav__item} onPress={() => navigation.navigate('Home')}>
              <Icon name="home" size={30} color={(isFocused && route.name== "Home") && "#B2002D" } />
              <Text style={{color:(isFocused && route.name== "Home") && "#B2002D"}} >Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav__item} onPress={() => {navigation.navigate('Location')}}>
              <Icon name="search1" size={30} color={(isFocused && route.name== "Location") && "#B2002D" } />
              <Text style={{color:(isFocused && route.name== "Location") && "#B2002D"}}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav__item} onPress={() => navigation.navigate('Booking')}>
              <Icon name="hearto" size={30} color={(isFocused && route.name== "Booking") && "#B2002D" } />
              <Text style={{color:(isFocused && route.name== "Booking") && "#B2002D"}}>Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav__item} onPress={() => navigation.navigate('Profile')}>
              <Icon name="user" size={30} color={(isFocused && route.name== "Profile") && "#B2002D" } />
              <Text style={{color:(isFocused && route.name== "Profile") && "#B2002D"}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav__item} onPress={() => navigation.navigate('More')}>
              <Icon name="bars" size={30} color={(isFocused && route.name== "More")  && "#B2002D" } />
              <Text style={{color:(isFocused && route.name== "More") && "#B2002D"}}>More</Text>
            </TouchableOpacity>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    flexDirection:"row",
    paddingTop:5,
  },
  nav__item: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '20%',
  },

});

export default Menu;
