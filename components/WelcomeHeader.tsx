import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function WelcomeHeader() {
    // const {userData, setUserData}=useContext(AuthContext);
    
    const userData = {
        name: 'Alexis',
        picture: 'https://example.com/pic.jpg',
    };

  return (
    <View style={styles.container}>
        <View>
            <Text>Hello,</Text>
            <Text style={{fontSize:20, fontWeight:'bold'}}>{userData?.name}</Text>
        </View>
        <Image source={{uri:userData?.picture}}
        style={{width:40, height:40, borderRadius:100}} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})