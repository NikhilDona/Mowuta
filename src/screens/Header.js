import React from'react';
import {View,TouchableOpacity,Image,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({headerTitle}) => {
    const navigation=useNavigation();
    return(
        <View style={{flexDirection:"row",alignItems:"center",marginTop:10,marginHorizontal:10}}>
            <TouchableOpacity
            style={{width:40,height:40,borderRadius:20,borderWidth:1,borderColor:"lightgrey",justifyContent:"center",alignItems:"center"}}
            onPress={()=>{
                navigation.goBack();
            }}>
                <Image
                style={{
                    width:40,
                    height:40,
                    resizeMode:"center"
                }}
                source={require('../assets/back.webp')}
                />
            </TouchableOpacity>
                <Text style={{color:"black",fontSize:22,fontWeight:"bold",marginLeft:60}}>{headerTitle}</Text>
        </View>
    )

}
export default Header;