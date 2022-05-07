import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
};


export default function Login() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [email, setEmail] = useState('admin');
    const [password, setPassword] = useState('admin');
    let navigation = useNavigation();


    async function  _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        setFontsLoaded(true);
      }
      useEffect(() => {
        _loadFontsAsync()
      }, []);

    onLoginButton = () => {
        console.log(">> on login button");
        if (email == password) {
            navigation.navigate('Home', { name: email });
            setEmail('')
            setPassword('')
        } else {
            Alert.alert('Username/Password should be admin/admin.');
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'Montserrat-Bold',fontSize: 32,justifyContent:'flex-start',width:'65%'}}>Login Account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    value={email}
                    onChangeText={(email) => setEmail( email )} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    value={password}
                    onChangeText={(password) => setPassword( password )} />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                onPress={() => onLoginButton()}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.textred}>FORGOT PASSWORD </Text>
            </TouchableHighlight>
        </View>
    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    text: {
        marginBottom: 5    
    },
    textred: {
        color : '#B2002D',
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop:20,
    },
    inputs: {
        paddingLeft: 15,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#B2002D",
    },
    loginText: {
        color: 'white',
    }
});
