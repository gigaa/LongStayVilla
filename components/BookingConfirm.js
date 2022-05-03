import { Text, StatusBar, View ,StyleSheet} from "react-native";
import React from 'react';
import ButtonRed from "./ButtonRed";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';


export default function BookingConfirm() {
    let navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Icon style={styles.icon} name="check" size={70} color="#B2002D"  />
            </View>
            <Text  style={styles.title}>Booking Confirm</Text>
            <Text  style={styles.text}>We will call you for more information in 24 Hours</Text>
            <Text  style={styles.text2}> Thanks for Booking !!</Text>
            <ButtonRed text="View More"  onPress={()=> {
                   navigation.navigate('Booking')
            }}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize:32,
        color: '#787A91',
        marginTop: 30,
    },
    text: {
        width: 250,
        fontSize:20,
        color: 'gray',
        textAlign: 'center',
        marginTop:15,
    },
    text2: {
        fontSize:20,
        color: 'gray',
        marginTop: 30,
        marginBottom: 30,
    }
  });