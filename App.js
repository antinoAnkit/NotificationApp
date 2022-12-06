import React, { useEffect } from 'react';
// redux
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/redux/store';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import Navigation from './src/navigation/Navigation';

// theme provider
import {NativeBaseProvider, StatusBar} from 'native-base';
import {customTheme, colorModeManager} from './src/theme/customTheme';

// toast
import Toast from 'react-native-toast-message';

// notification
import { notificationListener, requestUserPermission } from './src/utils/notification';

export default function App() {
  const handleNavRef = navigatorRef => {
    setTimeout(() => Navigation.setTopLevelNavigator(navigatorRef), 1000);
  };

useEffect(() => {
  requestUserPermission();
  notificationListener();
}, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider
          theme={customTheme}
          colorModeManager={colorModeManager}>
          <NavigationContainer ref={handleNavRef}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            <RootNavigation />
            <Toast />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
