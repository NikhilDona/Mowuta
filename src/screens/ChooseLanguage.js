import React, {useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,Button } from 'react-native';
import { images } from '../utils/Images'
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

class ChooseLanguage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ['English', 'Spanish'],
            checked: "English"
        }

    }
    render() {
        return (
            <View>
                <Text style={styles.container}>
                    Escoger Idioma

                </Text>
                <Text style={{ paddingLeft: 65, fontSize: 18, paddingTop: 15 }}>
                    Seleccione tu privilegiado idioma
                </Text>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <TouchableOpacity style={styles.touchable} onPress={() => this.setState({ checked: "English" })}>
                        <Image
                            source={images.flag}
                            style={{ height: 60, width: 60, marginTop: 26 }}
                        />
                        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 9 }}>
                            English
                        </Text>
                        <View style={this.state.checked != "English" ? styles.redioxBox : ""} >
                            {this.state.checked == "English" ? <View style={styles.tick}>
                                <View
                                    style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "skyblue" }}
                                />
                            </View> : <></>}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable2} onPress={() => this.setState({ checked: "Spanish" })}>
                        <Image
                            source={images.spainFlag}
                            style={{ height: 60, width: 60, marginTop: 26, borderRadius: 30 }}
                        />
                        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 9 }}>
                            Spanish
                        </Text>
                        <View style={this.state.checked != "Spanish" ? styles.redioxBox : ""} >
                            {this.state.checked == "Spanish" ? <View style={styles.tick}>
                                <View style={{
                                    height: 20, width: 20, borderRadius: 10, backgroundColor: "skyblue",
                                    borderColor: "white", borderWidth: 1
                                }} />

                            </View> : <></>}
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style = {styles.continueBox}
                    onPress={() => this.props.navigation.navigate("MobileLogin")}>
                    <Text style={{fontSize:18,paddingTop:10,color:"white",fontWeight:"bold"}}>
                        Continue
                    </Text>
                
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 100,
        fontSize: 30,
        color: "black"
    },
    touchable: {
        borderColor: "lightgrey",
        borderWidth: 2,
        height: 170,
        width: 161,
        marginTop: 52,
        borderRadius: 10,
        alignItems: "center"
    },
    redioxBox: {
        height: 26,
        width: 26,
        borderColor: "skyblue",
        borderRadius: 13,
        borderWidth: 2,
        marginTop: 15,
    },
    touchable2: {
        borderColor: "lightgrey",
        borderWidth: 2,
        height: 170,
        width: 161,
        marginTop: 52,
        marginLeft: 13,
        borderRadius: 10,
        alignItems: "center"

    },
    tick: {
        height: 26,
        width: 26,
        borderColor: "skyblue",
        borderRadius: 13,
        borderWidth: 2,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    continueBox:{
        borderColor:"#00fffa",
        borderWidth: 2,
        height: 50,
        width: 335,
        marginTop: 52,
        borderRadius: 40,
        alignItems: "center",
        alignSelf:"center",
        top:200,
        backgroundColor:"#00fffa"

    }


})


export default ChooseLanguage;