import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification, { Importance } from 'react-native-push-notification';
// redux
import {dispatch} from '../redux/store';
import {addNotification} from '../redux/slices/notifications';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus == messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    let fcmToken = await AsyncStorage.getItem('newToken');
    if (!fcmToken) {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log(fcmToken, 'New token generated', fcmToken);
          await AsyncStorage.setItem('newToken', fcmToken);
          //sendTokken('https://hooks.slack.com/services/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',fcmToken)
        }
      } catch (error) {
        console.log('Error in fcmtoken');
      }
    } else console.log('Old fcmtoken ', fcmToken);
  }
}


export const notificationListener = async () => {

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('message handled in background');
    if (remoteMessage) {
      console.log('Inside setBackgroundMessageHandler');

    }
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    dispatch(addNotification(remoteMessage.notification))
  });

  //background
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        dispatch(addNotification(remoteMessage.notification))
      }
    });

  //foreground
  messaging().onMessage(async (remoteMessage) => {
    dispatch(addNotification(remoteMessage.notification))

    PushNotification.createChannel(
      {
        channelId: 'channel-009', // (required)
        channelName: 'Bit Coin Info', // (required)
        channelDescription: 'A channel to categorise your notifications',
        playSound: false,
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`),
    );

    Platform.OS === 'android' &&
      PushNotification.localNotification({
        // (optional)
        channelId: 'channel-009', // (required)
        channelName: 'Bit Coin Info',
        userInfo: remoteMessage,
        playSound: true,
        soundName: 'default',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
        data: remoteMessage.data,
        onlyAlertOnce: true,
        invokeApp: true,
        smallIcon: 'ic_start_notification',
      });
  });
};

const sendTokken= (slackHook,tokken)=>{
      fetch(slackHook, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: tokken})
          }).then((response) => {
           setIsLoading(false);
          }).catch((error) => {
              
            }); 
}
