import { Text,SafeAreaView, ScrollView, StyleSheet, Alert ,StatusBar} from "react-native";
import React,{useEffect,useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import VillaCard from "./VillaCard";
import AppMenu from "./AppMenu";


import { connect } from "react-redux";



function Home({villas = [],dispatch}) {
  let navigation = useNavigation();
  useEffect(() => {
    villas= dispatch({ type: "GET_ALL_VILLA" });
  //  console.log(villas);
  }, []);

  console.log();
    return (
      <>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {villas.map((item) => <VillaCard key={item.id} 
                onBook = {(id)=>{
                    // setSelectCustomer({...getCustomerById(id)});
                    Alert.alert(
                        "Add you sure you to Book Villes?",
                        "",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                          },
                          { text: "OK", onPress: () => {
                            // let list = villas.filter((record) => (record.id == id));
                            // console.log("OK Pressed",list) 
                            navigation.navigate('BookingConfirm')
                            singleVilla= dispatch({ type: "GET_SINGLE_VILLA_SUCCESS" ,payload: { id } });
                            bookingVilla= dispatch({ type: "GET_BOOKING" ,payload: { id } });

                          }
                        }
                        ]
                    );
                    console.log(">> selectCustomer "+id);
                }}
                onMore = {(id)=>{
                    // let list = villas.filter((record) => (record.id == id));
                    // console.log("onMore",list) 
                    singleVilla= dispatch({ type: "GET_SINGLE_VILLA_SUCCESS" ,payload: { id } });

                    navigation.navigate('SingleVilla')

                }}
                item={item} />)}
            </ScrollView>
        </SafeAreaView>
        <AppMenu />
      </>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      marginHorizontal: 5,
    }
  });

  const mapStateToProps = (state) => {
    const { villas } = state;
    return { villas };
  };
  export default connect(mapStateToProps)(Home);