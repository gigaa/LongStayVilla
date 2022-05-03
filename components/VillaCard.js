import { Text, StyleSheet,StatusBar,ImageBackground,TouchableHighlight, View ,Button,Image} from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function VillaCard({item,onBook,onMore}) {
    let {id,name,image,price,address,totalarea}=item;
    console.log('address>',id);
    return (
        <View style={styles.container}>
  
            <Image source={{uri: image }}   style={styles.tinyLogo} />
            <Text style={styles.name} >{name}</Text>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.container__bottom}>
                <Text style={styles.address}>
                    <Icon name="md-location-sharp" size={30} />
                    {address}
                </Text>
                <View  style={styles.container__button} >
                    <TouchableHighlight style={[styles.buttonContainer]} 
                        onPress={()=>{ 
                            onMore(id)
                            console.log('MORE')
                        }}>
                        <Text style={styles.text}>MORE</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.buttonContainer]} 
                        onPress={()=>{ 
                            onBook(id);
                            console.log('Book Villa')
                        }}>
                        <Text style={styles.text}>Book Villa</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      width:'100%',
      marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: "center"
    },
    container__bottom: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container__button: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        marginLeft:15,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 100,
        borderRadius: 30,
        backgroundColor: "#B2002D",
        marginLeft:5,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    name: {
      fontSize: 32,
    },
    price: {
        fontSize: 20,
        color: "#B2002D",
    },
    address:{
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
    },
    tinyLogo: {
        width: '100%',
        height: 200,
    },
  });