# React Native Push Notification


## What's inside

- UI/UX Design components from [NativeBase](https://docs.nativebase.io/?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_3)
- Redux, [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) for state management 
- [React Navigation](https://reactnavigation.org/docs/getting-started/) for simple navigation also includes custom bottom tab
- Performant, flexible and extensible forms with easy-to-use validation using [React Hook Form](https://react-hook-form.com/get-started)
- [Yup](https://www.npmjs.com/package/yup) to build schema for value parsing and validation
- Includes [Vector Icons](https://www.npmjs.com/package/react-native-vector-icons). Perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project. 
- Includes [Push Notification](https://rnfirebase.io/messaging/notifications)

## How to customize theme
- Just navigate to `PROJECT-DIRECTORY/src/theme/customeTheme.js` and make the desired changes.[example file](https://github.com/DivyaSharmaAntino/NotificationApp/blob/main/src/theme/customTheme.js)
- You can change colors, fonts, initial color mode(dark/light) etc.
- [see more theme options](https://docs.nativebase.io/customizing-theme) 

## How to add fonts
- Download font family from [here](https://fonts.google.com/)
- Navigate to `PROJECT-DIRECTORY/src/assets/fonts` and unzip all fonts here
- Then navigate to `PROJECT-DIRECTORY/src/theme/customeTheme.js` and add/change fonts and fontConfig.
```
 fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter',
  },
  fontConfig: {
    Inter: {
      100: {
        normal: 'Inter-Thin',
      },
      200: {
        normal: 'Inter-ExtraLight',
      },
      300: {
        normal: 'Inter-Light',
      },
      400: {
        normal: 'Inter-Regular',
      },
      500: {
        normal: 'Inter-Medium',
      },
      600: {
        normal: 'Inter-SemiBold',
      },
      700: {
        normal: 'Inter-Bold',
      },
      800: {
        normal: 'Inter-ExtraBold',
      },
      900: {
        normal: 'Inter-Black',
      },
    },
 }
```
- Then run ``npx react-native link`` or ``yarn react-native link``
- [Refer here for more](https://blog.logrocket.com/adding-custom-fonts-react-native)
