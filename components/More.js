import React from 'react';
import { Text, StyleSheet, View ,TouchableOpacity,StatusBar} from "react-native";
import { useNavigation } from '@react-navigation/core';
import AppMenu from "./AppMenu";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/FontAwesome';

export default function More() {
    let navigation = useNavigation();

    return (
        <>
            <View  style={styles.container}>
                <Icon3 style={styles.close} 
                onPress={()=> {
                    navigation.navigate('Home')
                }} name="close-a" size={30} color="#B2002D"  />
                <View style={styles.card}>
                    <View style={styles.card__item}>
                        <Icon2 name="ios-golf-outline" size={30} color="gray"  />
                        <Text style={styles.cardText}>Booking Address</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                        <View style={styles.card__line}></View>
                    </View>
                    <View style={styles.card__item}>
                        <Icon name="creditcard" size={30} color="gray"  />
                        <Text style={styles.cardText}>Payment Method</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                        <View style={styles.card__line}></View>
                    </View>
                    <View style={styles.card__item}>
                        <Icon3 name="wallet" size={30} color="gray" />
                        <Text style={styles.cardText}>Currency</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                        <View style={styles.card__line}></View>
                    </View>
                    <View style={styles.card__item}>
                        <Icon4 name="language" size={30} color="gray"  />
                        <Text style={styles.cardText}>Language</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                    </View>
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btn} >LOG OUT</Text>
                </TouchableOpacity>
            </View>
            <AppMenu />
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        // backgroundColor: '#EEEEEE',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
    },

    card:{
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 20,
        marginTop:80,
    },
    card__item:{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    card__line:{
        position: 'absolute',
        bottom: 0,
        right: 20,
        height:1,
        width: '70%',
        backgroundColor: '#EEEEEE',
    },
    cardText:{
        fontSize: 17,
        color: 'gray',
        marginLeft:30,
    },
    cardArrow:{
        position: 'absolute',
        right: 20,
    },
    close:{
        position: 'absolute',
        top: 20,
        right: 20,
    },
    btn: {
        color: "#B2002D",
        marginTop:100,
        fontSize:18,
    }
});