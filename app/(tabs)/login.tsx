import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from './../../constants/Colors';


export default function Login() {

    const [accessToken,setAccessToken]=useState();
    const [userInfo,setUserInfo]=useState();
    const [userData,setUserData]=useState();



      
    return (
        <View style={{alignItems: 'center'}}>
            <Image source={require('./../../assets/images/login.png')} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to Education App!</Text>
                <Text style={{textAlign:'center', marginTop:40, fontSize:20}}>Login/Signup</Text>
                <View  style={styles.button}>
                    <>
                        <GoogleLogin theme='filled_blue'
                        onSuccess={(credentialResponse) => {
                            console.log(credentialResponse);
                            console.log(jwtDecode(credentialResponse.credential));
                            const decoded = jwtDecode(credentialResponse.credential);
                             
                            const {name, email, picture} = decoded;
                            console.log(name, email, picture);
                            // Extract relevant user data
                            const newUser = {
                            name: decoded.name,
                            email: decoded.email,
                            picture: decoded.picture,
                            // You might also want to store the ID token itself for backend verification
                            idToken: credentialResponse.credential,
                            };
                            setUserData(newUser);
                            localStorage.setItem('googleUserData', JSON.stringify(newUser)); // Persist login
                            setUserInfo(newUser);
                            console.log(userData);
                            // await Services.setUserAuth(user);
                            setAccessToken(credentialResponse.credential)
                            
                        }}

                        onError={() => console.log("login failed")} 
                        auto_select={true} />
                    </>
                    <TouchableOpacity onPress={()=>{ setUserData({
                        name:'Alex Ver',
                        picture:'https://cdn3d.iconscout.com/3d/premium/thumb/male-customer-call-service-portrait-6760890-5600697.png?f=webp',
                        email:'alexis@gmail.com',
                        id:1
                    });
                    localStorage.setItem('googleUserData', JSON.stringify(userData)); // Persist login
                    console.log(userData);
                    }}>
                        <Text>| Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        marginTop:-25,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    welcomeText:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold' 
    },
    button:{
        backgroundColor:Colors.primary.text,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})