import AsyncStorage from '@react-native-async-storage/async-storage';
import { googleLogout } from '@react-oauth/google';


const setUserAuth=async(value)=>{
    await AsyncStorage.setItem('userData',JSON.stringify(value))
}

const getUserAuth=async()=>{
   const value=await AsyncStorage.getItem('userData');
   return JSON.parse(value)
}

const Logout=()=>{
    googleLogout();
    AsyncStorage.clear(); 

}

export default{
    setUserAuth,
    getUserAuth,
    Logout,
}