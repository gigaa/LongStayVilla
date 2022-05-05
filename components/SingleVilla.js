import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, Alert,StyleSheet,Dimensions,StatusBar,ImageBackground,TouchableOpacity, View ,Button,Image} from "react-native";
import { connect } from "react-redux";
import ButtonRed from "./ButtonRed";
import Icon from 'react-native-vector-icons/Ionicons';


function SingleVilla({signle_villa ,dispatch}) {
    let navigation = useNavigation();

    // console.log(JSON.stringify(signle_villa) );
    let {id,name,description,image,reviews,price,address,totalarea}= signle_villa[0]

    return (
        <View style={styles.container}>
            <Image source={{uri: image }}   style={styles.tinyLogo} />
            <Text  style={styles.name} >{name}</Text>
            <View  style={styles.line} >
                <Text  style={styles.arealeft} >Amiantus</Text>
                <Text  style={styles.details} >Details</Text>
                <Text  style={styles.arearight} >Reviews</Text>
            </View>
            <View  style={styles.line} >
                <Text  style={styles.arealeft} >BADROOM</Text>
                <Text  style={styles.arearight} >{reviews}</Text>
            </View>
            <View  style={styles.line} >
                <Text  style={styles.arealeft} >TOTAL AREA</Text>
                <Text  style={styles.arearight} >{totalarea}</Text>
            </View>
            <Text  style={styles.description} >{description}</Text>
            <View style={styles.bottomButton}>
     
                <TouchableOpacity style={[styles.buttonBg]}  onPress={()=>{}}>
                    <Text style={styles.text}>SHARE THIS</Text>
                    <Icon style={styles.icon} name="arrow-up-circle" size={30} color="gray" />
                </TouchableOpacity>
                <ButtonRed  text="Book" onPress={()=>{
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
                            bookingVilla= dispatch({ type: "GET_BOOKING" ,payload: { id } });

                            navigation.navigate('BookingConfirm')
                          }
                        }
                        ]
                    );
                }} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      alignItems:'center',
    //   position: 'relative',
    //   justifyContent: 'center',
    //   flexDirection: 'column',
      height:Dimensions.get("window").height,
      marginTop: StatusBar.currentHeight || 0,
    },
    name: {
        fontSize: 32,
        marginTop:30,
    },
    description: {
      fontSize: 25,
      textAlign:'center',
      marginTop:30,
    },
    details: {
        fontSize: 20,
        color: "#B2002D",
        textAlign:'center',
    },
    line: {
        // flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:30,

    },
    bottomButton:{
        position: 'absolute',
        bottom: 0,
        height: 100,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#EEEEEE',
        marginTop:30,

    },
    arealeft: {
        fontSize: 17,
        color: 'gray'
    },
    arearight: {
        fontSize: 17,
    },
    buttonBg: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 200,
        borderRadius: 30,
        backgroundColor: "#ffffff",
    },
    icon: {
      position: "absolute",
      right: 10,
    },
    text: {
        color: 'gray',
        fontSize: 17,
    },
    tinyLogo: {
        width: '100%',
        height: 300,
    },
  });

const mapStateToProps = (state) => {
    const { signle_villa } = state;
    return { signle_villa };
  };
export default connect(mapStateToProps)(SingleVilla);
