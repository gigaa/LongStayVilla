import React,{useState,useEffect,useRef} from 'react';
import { Text,TouchableOpacity,Image,Dimensions,SafeAreaView, ScrollView, StatusBar, TextInput, View ,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/core';
import AppMenu from "./AppMenu";


function Location({search_villa ,dispatch}) {
    let navigation = useNavigation();

    const [search, setSearch] = useState();
    const focusDiv = useRef();
    // console.log('tempProducts',JSON.stringify(search_villa) );    
    // console.log('--------------------------------');    

    useEffect(() => {
        if(focusDiv.current) focusDiv.current.focus(); 
    }, [focusDiv]);

    const updateFilters = (value) => {
       dispatch({ type: "GET_SEARCH" ,payload: { value } });
        // console.log('searchResalt',JSON.stringify(searchResalt) );
    };

    return (
        <>        
            <View  style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <Icon name="search1"  size={20}  style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => updateFilters(value)}
                            name="text"
                            value={search}
                            placeholder="Search"
                            ref={focusDiv}
                        />
                    </View>
                    <Icon2 name="ios-funnel-outline"  size={30} style={styles.funnelIcon}/>
                </View>

                

                <SafeAreaView style={styles.container_area}>
                    <ScrollView style={styles.scrollView}>
                        {search_villa.map(({id,image}) =>  
                        <TouchableOpacity key={id} onPress={() => {
                            singleVilla= dispatch({ type: "GET_SINGLE_VILLA_SUCCESS" ,payload: { id } });
                            navigation.navigate('SingleVilla')
                        }}>
                            <Image   source={{uri: image }} style={styles.tinyLogo} />
                        </TouchableOpacity>
                        )}  
                    </ScrollView>
                </SafeAreaView>
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
        height:Dimensions.get("window").height,
        marginTop: StatusBar.currentHeight || 0,
    },
    container_area: {
        flex: 1,
        width:'100%',
        // backgroundColor:'gray'
    },
    scrollView: {
        marginHorizontal: 5,
    },
    searchContainer:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: '90%',
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        justifyContent: 'center'
    },
    funnelIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        marginBottom:10,
        marginRight:5,
    },
    tinyLogo: {
        width: '100%',
        height: 200,
        marginTop:5,
    },
});


const mapStateToProps = (state) => {
    const { search_villa } = state;
    return { search_villa };
  };
export default connect(mapStateToProps)(Location);