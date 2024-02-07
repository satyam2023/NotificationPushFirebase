import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

async function onDisplayNotification(title:any,body:any) {
  
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      badge:true
    });

    
    await notifee.displayNotification({
      title:`<p style="color: #4caf50;"><b>${title}</span></p></b></p> &#128576;`,
      body: ` <p style="color:#2EF4D17A;"><b>${body}</b></p>`,
      android: {
        channelId,
        color: '#E8210C',
        // largeIcon:'https://icons8.com/icon/13717/notification',
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  async function getToken(){
    await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log("TOken::",token);
  }

  export { getToken,onDisplayNotification};