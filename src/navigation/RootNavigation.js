import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// redux
import {useSelector} from '../redux/store';

// screens
import Login from '../screens/auth/Login.screen';
import Notification from '../screens/notifications/Notification.screen';
import Details from '../screens/details/Details.screen';


const Stack = createStackNavigator();

const RootNavigation = () => {
  const {loggedIn} = useSelector(state => state.user);

  if (!loggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
