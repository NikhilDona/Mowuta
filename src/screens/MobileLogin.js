import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from "./Header";

export const MobileLogin = ({ navigation }) => {
    // const [name,setName]= useState("nikhil")
    // useEffect(()=>{
    //     console.warn("sdkjsjkdsj8")
    // },[name])
    return (
        <View style={{ flex: 1 }}>
            <Header headerTitle="" />
            <Text style={styles.container}>
                Welcome

            </Text>
            <Text style={{ alignSelf: "center", fontSize: 18, margin: 20 }}>
                Please Login/Signup in order to access all the
                features of the Platform. Please enter
                your phone number to continue.
            </Text>
            <TextInput maxLength={10} keyboardType="numeric" style={styles.phoneNum}
                placeholder="Mobile no."
            />

            <TouchableOpacity style={styles.continueBox}
                onPress={() => navigation.navigate("SignUp")}>
                <View>

                    <Text style={{ fontSize: 18, paddingTop: 10, color: "white", fontWeight: "bold" }}>
                        Continue
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={{ position: "absolute", alignSelf: "center", fontWeight: "bold", bottom: 15 }}>
                Powered by Mowuta
            </Text>

        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        fontSize: 35,
        alignSelf: "center",
        fontWeight: "bold",
        color: "black",
        paddingTop: 100
    },
    phoneNum: {

        borderColor: "grey",
        borderWidth: 2,
        height: 50,
        width: 335,
        marginTop: 52,
        borderRadius: 40,
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    continueBox: {
        borderColor: "#00fffa",
        borderWidth: 2,
        height: 50,
        width: 335,
        borderRadius: 40,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#00fffa",
        position:"absolute",
        bottom:50



    }

})






