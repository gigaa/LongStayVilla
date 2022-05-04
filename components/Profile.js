import React from 'react';
import { Text, StyleSheet, View ,Image,StatusBar} from "react-native";
// import avatar from '../assets/profile.jpeg';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Profile() {
    return (
        <View style={styles.container}>
            <View  style={styles.freamcontainer}>
                <View style={styles.header}>
                    <View style={styles.header__left}>
                        <Image  source={{uri: 'https://i.err.ee/smartcrop?type=optimize&width=672&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2021%2F02%2F04%2F911671hec62.jpg' }} style={styles.tinyLogo} />
                    </View>
                    <View style={styles.header__right}>
                        <Text style={styles.name}> Jane Doe</Text>
                        <Text style={styles.email}> janedoe123@email.com</Text>
                        <View  style={styles.editbtn}>
                            <Text style={styles.edittext}> EDIT PROFILE</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.card__item}>
                        <Icon name="bars" size={30} color="gray"  />
                        <Text style={styles.cardText}>All My Booking</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                        <View style={styles.card__line}></View>
                    </View>
                    <View style={styles.card__item}>
                        <Icon2 name="parachute-box" size={30} color="gray"  />
                        <Text style={styles.cardText}>Pending Visits</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                        <View style={styles.card__line}></View>
                    </View>
                    <View style={styles.card__item}>
                        <Icon name="creditcard" size={30} color="gray" />
                        <Text style={styles.cardText}>Pending Payments</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                        <View style={styles.card__line}></View>
                    </View>
                    <View style={styles.card__item}>
                        <Icon3 name="star-circle-outline" size={30} color="gray"  />
                        <Text style={styles.cardText}>Feedback</Text>
                        <Icon style={styles.cardArrow} name="rightcircle" size={20} color="gray" />
                    </View>
                </View>

            </View>
 
        </View>
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
    freamcontainer:{
        width:'90%',
    },
    header:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:20,
    },
    name: {
        fontSize: 32,
        color: '#787A91',
    },
    email: {
        fontSize: 17,
        color: 'gray',
        marginTop:20,
    },
    editbtn: {
        width:150,
        height:40,
        borderColor:'#787A91',
        borderWidth:1,
        borderRadius:100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
    },
    edittext:{
        fontSize: 17,
        color: 'gray',
    },
    tinyLogo: {
        width: 130,
        height: 130,
        borderRadius: 100,
        // marginTop:5,
    },
    card:{
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 20,
        marginTop:50,
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
    }
});