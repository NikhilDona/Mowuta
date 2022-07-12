import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import Header from './Header';
const SignUp = ({ navigation }) => {
    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("")

    const nik = () => {

        if (name !== "") {
            if (pwd == cpwd) {
                navigation.navigate("SignUpPersonalInfo")
            }
            else {
                alert("Oops!! Password Unmatched")
            }
        }
        else {
            alert("Enter name")
        }
    }

    return (
        <View >
            <Header headerTitle="Create Account" />
            <KeyboardAvoidingView behavior="padding">
                <ScrollView>
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <Text style={styles.container1}>General Info</Text>

                            <Text style={styles.container2}>
                                Next: Personal Info
                            </Text>
                        </View>
                        <View style={styles.circle}>
                            <Text style={styles.dfd}>
                                1 of 2
                            </Text>

                        </View>
                    </View>
                    <Text style={styles.details}>
                        Please provide below details to create
                        your account
                    </Text>
                    <TextInput onChangeText={(dis) => setName(dis)} placeholder='Enter Your Name' autoCapitalize="words" style={styles.box}></TextInput>
                    <TextInput onChangeText={(val) => setPwd(val)} placeholder='Enter Password' style={styles.box2}></TextInput>
                    <TextInput onChangeText={(val) => setCpwd(val)} placeholder='Re-enter Password' style={styles.box}></TextInput>


                    <TouchableOpacity style={styles.continueBox}
                        onPress={() => nik()}>
                        <Text style={{ fontSize: 18, paddingTop: 10, color: "white", fontWeight: "bold" }}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginTop: 140, marginLeft: 62 }}>
                        <Text style={styles.TC}> Terms and Conditions </Text>
                        <Text> | </Text>
                        <Text style={styles.TC}> Privacy Policy</Text>
                        
                    </View>
                    <Text style={{ position: "absolute", alignSelf: "center", color: "black",bottom:100 }}>
                        Powered by Mowuta
                    </Text>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container1: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        paddingTop: 31,
        paddingLeft: 20

    },
    container2: {
        fontSize: 18,
        color: "black",
        paddingTop: 5,
        paddingLeft: 20

    },
    circle: {
        height: 65,
        width: 65,
        borderRadius: 32,
        borderWidth: 3,
        marginLeft: 90,
        alignSelf: "flex-end",
        borderColor: "lightgrey"

    },
    dfd: {
        alignSelf: "center",
        marginTop: 18,
        color: "black",
        fontWeight: "bold",
        fontSize: 16

    },
    details: {
        alignSelf: "center",
        fontSize: 17,
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 40,
        textAlign: "center"

    },
    box: {
        borderColor: "lightgrey",
        borderWidth: 2,
        height: 48,
        width: 335,
        borderRadius: 40,
        alignItems: "center",
        alignSelf: "center",
        top: 20,
        textAlign: "left",
        paddingLeft: 20,
        fontSize: 18

    },
    box2: {
        borderColor: "lightgrey",
        borderWidth: 2,
        height: 48,
        width: 335,
        borderRadius: 40,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 40,
        textAlign: "left",
        fontSize: 18,
        paddingLeft: 20

    },
    continueBox: {
        borderColor: "#00fffa",
        borderWidth: 2,
        height: 50,
        width: 335,
        marginTop: 52,
        borderRadius: 40,
        alignItems: "center",
        alignSelf: "center",
        top: 120,
        backgroundColor: "#00fffa"

    },
    TC: {
        color: "#00f2ff",
        fontSize: 14
    }


})
export default SignUp;