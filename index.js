/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import { onDisplayNotification } from './src/utils/helper';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    // await onDisplayNotification(remoteMessage.notification?.title,remoteMessage.notification?.body);
  });

  messaging().getInitialNotification(
    async remoteMessage => {
        console.log('Message handled in the Killed State!', remoteMessage);}
  )

AppRegistry.registerComponent(appName, () => App);
