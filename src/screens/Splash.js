import React , {Component} from 'react';
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator

class Splash extends Component{

    componentDidMount(){
   setTimeout(()=>{
       this.props.navigation.navigate("ChooseLanguage")
    
    },2000)

    }
    
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#00f2ff',justifyContent:"center"}}>
                <Text style={{fontSize:40,position:'absolute',alignSelf:"center",
                color:"white",fontWeight:"bold"
                }}>
                    Mowuta
                </Text>

                <Text style={{position:"absolute",bottom:10,alignSelf:"center"}}>
                    Powered by Mowuta
                </Text>
            </View>
        )
    }

}
export default Splash;