import { Text, StyleSheet,StatusBar,TouchableOpacity, View ,Image} from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { connect } from "react-redux";

function BookingCard({item,onMore,dispatch}) {
    let navigation = useNavigation();

    let {id,name,image,description,price,address,totalarea}=item[0];
    console.log('address>',id);
    return (
        <TouchableOpacity key={id} onPress={() => {
            singleVilla= dispatch({ type: "GET_SINGLE_VILLA_SUCCESS" ,payload: { id } });
            navigation.navigate('SingleVilla')
        }}>

        <View style={styles.container} >
            <Image source={{uri: image }}   style={styles.tinyLogo} />
            <Text style={styles.name} >{name}</Text>
            <Text style={styles.description} >{description}</Text>
            <Text style={styles.price}>{price}  / Per Day   Total : $24000</Text>
            <View style={styles.container__bottom}>
                <View style={styles.check}>
                    <Text style={styles.checkText} >Check In Date : 12th April 2021</Text>
                    <Text style={styles.checkText} >Check Out Date : 18th April 2021</Text>
                </View>
                <Text style={styles.address}>
                    <Icon name="md-location-sharp" size={30} />
                    {address}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      width:'100%',
      marginTop: StatusBar.currentHeight || 0,
    },

    container__bottom: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 17,
        marginTop:20,
    },
    description: {
        fontSize: 17,  
        marginTop:20,
    },
    price: {
        fontSize: 17,
        marginTop:20,
    },
    check:{
        width: '70%',
        flexDirection: 'column',
    },
    checkText: {
        fontSize: 17,
        marginTop:20,
    },
    address:{
        fontSize: 17,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 150,
        marginTop:20,
        width: '30%',
    },
    tinyLogo: {
        width: '100%',
        height: 200,
        marginTop:20,
    },
  });

  const mapStateToProps = (state) => {
    const {  } = state;
    return {  };
};
export default connect(mapStateToProps)(BookingCard);