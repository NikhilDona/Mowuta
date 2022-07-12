import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import { images } from '../utils/Images';
import Header from './Header';
import axios from 'axios';



const SignUpPersonalInfo = ({navigation}) => {
    const[nik,setNik] = useState("")

    const fetchData = async () => {
       await axios.get("https://api.sampleapis.com/coffee/hot").then((response) => console.log(response.data));

        
    }
    useEffect(() => {
        fetchData()

    },[])
    const data = ['Male', 'Female', 'Other', 'Prefer Not to Say']
    const [gender, setGender] = useState(false)
    const [checked, setChecked] = useState(0)
    return (
        <View style={{ flex: 1 }}>
            <Header headerTitle={"Create Account"}/>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Text style={styles.container1}>Personal Info</Text>

                    <Text style={styles.container2}>
                        Prev: General Info
                    </Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.dfd}>
                        2 of 2
                    </Text>

                </View>
            </View>
            <Text style={styles.details}>
                Please provide below details to create
                your account
            </Text>
            <View>
                <TouchableOpacity onPress={() => { setGender(true) }} style={styles.box}>
                    <Text style={styles.box3}>Gender</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box2}>
                    <Text style={styles.box3}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={styles.box3}>Birthday</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.continueBox}
            onPress={() => navigation.navigate("Login")}>
            
                <Text style={{ fontSize: 18, paddingTop: 10, color: "white", fontWeight: "bold" }}>
                    Continue
                </Text>
            </TouchableOpacity>
            <Text style={{ position: "absolute", alignSelf: "center", color: "black", bottom: 10 }}>
                Powered by Mowuta
            </Text>


            <Modal visible={gender} transparent={true} style >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "grey" }}>
                    <View style={{ zIndex: 1, height: 334, backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 19, justifyContent: "space-between" }}>
                            <View />
                            <Text style={{ fontSize: 20, alignSelf: "center", fontWeight: "bold", color: "black" }}>
                                Gender

                            </Text>
                            <TouchableOpacity style={{ paddingRight: 12 }}>

                                <Image
                                    source={images.cross}
                                    style={{ height: 15, width: 15 }}
                                />
                            </TouchableOpacity>


                        </View>
                        {
                            data.map((data, key) => {
                                return (
                                    <View>
                                        {checked == key ?
                                            <TouchableOpacity style={{ flexDirection: "row", paddingLeft: 10 }}>

                                                <View style={styles.tick}>
                                                    <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "#00fffa" }} />
                                                </View>
                                                <Text style={{ fontSize: 16, marginLeft: 20 }}>
                                                    {data}
                                                </Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ flexDirection: "row", paddingLeft: 10 }} onPress={() => setChecked(key)}>

                                                <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: "white", borderColor: "lightgrey", borderWidth: 2 }} />
                                                <Text style={{ fontSize: 16, marginLeft: 20 }}>
                                                    {data}
                                                </Text>


                                            </TouchableOpacity>
                                        }
                                    </View>
                                );
                            })
                        }


                        <TouchableOpacity style={styles.continueBox2}
                        // 
                        >
                        
                            <View>

                                <Text style={{ fontSize: 18, paddingTop: 10, color: "white", fontWeight: "bold" }}>
                                    Continue
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </Modal>

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
        borderColor: "#00fffa"

    },
    dfd: {
        alignSelf: "center",
        marginTop: 18,
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
    },
    details: {
        alignSelf: "center",
        fontSize: 17,
        textAlign: "center",
        paddingLeft: 51,
        paddingRight: 50,
        paddingTop: 41
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
    box3: {
        color: "grey",
        fontSize: 16,
        alignSelf: "flex-start",
        textAlign: "center",
        paddingTop: 10

    },
    continueBox2: {
        borderColor: "#00fffa",
        borderWidth: 2,
        height: 50,
        width: 335,
        borderRadius: 40,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#00fffa",
        position: "absolute",
        bottom: 35

    },
    tick: {
        height: 16,
        width: 16,
        borderColor: "#00fffa",
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    tick2: {
        height: 22,
        width: 22,
        borderColor: "grey",
        borderRadius: 11,
        borderWidth: 1,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"

    }

})


export default SignUpPersonalInfo;