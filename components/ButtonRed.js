import { Text,  StyleSheet ,TouchableOpacity} from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


export default function ButtonRed({text,onPress}) {

    return (
        <TouchableOpacity style={[styles.buttonBg]}  onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
            <Icon style={styles.icon} name="rightcircle" size={30} color="#ffffff" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonBg: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 170,
        borderRadius: 30,
        backgroundColor: "#B2002D",
    },
    icon: {
      position: "absolute",
      right: 10,
    },
    text: {
        color: 'white',
        fontSize: 17,
    }
});