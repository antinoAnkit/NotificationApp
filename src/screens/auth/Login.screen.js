import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {Box, KeyboardAvoidingView} from 'native-base';
import auth from '@react-native-firebase/auth';
// google sign-in
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
// redux
import {useDispatch} from '../../redux/store';
import {login} from '../../redux/slices/user';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '50939478741-04de7nvh7uafktgdvh06st7tvvdqv6j3.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      dispatch(login(userInfo));
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Toast.show({
          type: 'error',
          text1: 'SignIn Cancelled',
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Toast.show({
          type: 'info',
          text1: 'Sign in is in progress already',
        });
        
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Toast.show({
          type: 'error',
          text1: 'Play services not available or outdated',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Something went wrong!',
        });
      }
    }
  };
  return (
    <>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Box
          flex={1}
          bg={'background.50'}
          alignItems={'center'}
          justifyContent={'center'}
          px={'4'}>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
                 </Box>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
