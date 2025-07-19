import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './home';
import Login from './login';

const CLIENT_ID = "755789031332-se5244inbbto7sgnituqv0gh77djgeoa.apps.googleusercontent.com";

export default function HomeScreen() {
  const [userData,setUserData]=useState(null);
 
  useEffect(() => {
    const storedUserData = localStorage.getItem('googleUserData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* <GoogleOAuthProvider clientId={CLIENT_ID}>
      {userData?
      // <NavigationContainer>
      //     <HomeNavigation/>
      // </NavigationContainer>
      <Home/> :<Login/>}
      
       </GoogleOAuthProvider> */}
       
      <GoogleOAuthProvider clientId={CLIENT_ID}>
      {/* Conditionally render based on userData state */}
      {userData ? (
        // User is logged in, show Home component
        <Home userData={userData} />
      ) : (
        // User is not logged in, show Login component
        // Pass the GoogleLogin component and its handlers to the Login component
        <Login />
      )}
    </GoogleOAuthProvider>
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F6F8FC",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
