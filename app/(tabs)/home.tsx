import SearchBar from '@/components/SearchBar';
import WelcomeHeader from '@/components/WelcomeHeader';
import React from 'react';
import { View } from 'react-native';


export default function Home() {
    // const {userData,setUserData}=useContext(AuthContext)
   
  return (
    // <ScrollView style={{padding:20}}>
        <View style={{padding:20}}> 
          <WelcomeHeader/>
          <SearchBar/>
        </View>
    // </ScrollView>  
  )
} 