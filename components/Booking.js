import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, StyleSheet, View ,Button} from "react-native";
import { connect } from "react-redux";
// import Navbar from '../container/Navbar';
import BookingCard from './BookingCard';
import ButtonRed from "./ButtonRed";
import { useNavigation } from '@react-navigation/core';
import AppMenu from "./AppMenu";


function Booking({booking_villa ,dispatch}) {
    let navigation = useNavigation();

    // console.log('booking_villa',JSON.stringify(booking_villa) );    
    // console.log('--------------------------------');    
    return (
        <>
            <View style={styles.container} >
                <SafeAreaView style={styles.main}>
                    <ScrollView style={styles.scrollView}>
                        {booking_villa.map((item,index) => <BookingCard key={index} item={item} />)}
                    </ScrollView>
                </SafeAreaView>
                
                <ButtonRed text="View More"  onPress={()=> {
                    navigation.navigate('Home')
                }}/>
            </View>
            <AppMenu />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      alignItems:'center',
    },
    main: {
        // flex: 1,
        paddingTop: StatusBar.currentHeight,
        width:'100%',
        // width:'95%',
        alignItems:'center',
        marginBottom: 20,
    },
      scrollView: {
        marginHorizontal: 5,
      }
  });


const mapStateToProps = (state) => {
    const { booking_villa } = state;
    return { booking_villa };
};
export default connect(mapStateToProps)(Booking);