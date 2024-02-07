/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';

import messaging from '@react-native-firebase/messaging';

import onDisplayNotification from './utils';


function App(): React.JSX.Element {
  useEffect(()=>{
    getToken();
  },[]);

  async function getToken(){
    await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log("TOken::",token);
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!::', JSON.stringify(remoteMessage));
      const data=remoteMessage;
      console.log("Data::",data.notification?.title);
      onDisplayNotification(data.notification?.title,data.notification?.body);
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{backgroundColor:'black',height:'100%'}}>
      <Text style={{color:'red',fontSize:20,textAlign:'center',alignSelf:'center',fontWeight:'600',}}>
        Notification
      </Text>
    </SafeAreaView>
  );
}


export default App;
