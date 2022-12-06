import React, { useState } from 'react';
import { Box, HStack, IconButton, Icon, Avatar, Pressable, VStack } from 'native-base';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
// components
import AppText from '../../components/text/AppText';
// redux
import { dispatch } from '../../redux/store';
import { setLogout } from '../../redux/slices/user';
import { useSelector } from '../../redux/store';

const Notification = props => {
  const [index, setIndex] = useState(0);
  const { notifications } = useSelector(state => state.notifications);

  const handlePress = item => {
    props.navigation.navigate('details', { item });
  };

  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(setLogout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box safeAreaTop bg={'background.50'} />
      <Box flex={1} bg={'background.50'}>
        {/* TOP BAR */}
        <HStack justifyContent={'space-between'} alignItems={'center'} p={'4'}>
          <AppText textAlign={'center'} fontSize={22} fontWeight={600}>
            {'Notifications'}
          </AppText>
          <IconButton
            variant="subtle"
            rounded={100}
            colorScheme={'coolGray'}
            onPress={() => logout()}
            icon={
              <Icon
                alignItems="center"
                justifyContent="center"
                size="4"
                as={AntDesign}
                name="close"
              />
            }
          />
        </HStack>
        <Box flexDirection="row" bg={'background.50'} borderBottomColor={'coolGray.200'} borderBottomWidth={1} px={'4'}>
          {ROUTES.map((route, i) => {
            return (
              <Box flex={1} key={i}>
                <Pressable onPress={() => setIndex(i)}>
                  <AppText my={2} fontSize={14} fontWeight={600} color={index === i ? 'coolGray.900' : 'coolGray.400'}>
                    {route.title}
                  </AppText>
                </Pressable>
                <Box h={1} w={'50%'} borderRadius={10} bg={index === i ? 'secondary.600' : 'white'} />
              </Box>
            );
          })}
          <Pressable>
            <AppText my={2} fontWeight={600} color={'secondary.50'}>Mark all as Read</AppText>
          </Pressable>
        </Box>
        <Box bg={'coolGray.100'} p={2}>
          <AppText color={'coolGray.600'} fontWeight={600}>TODAY</AppText>
        </Box>
        {/* Notifaction List */}
        {notifications.length > 0 && notifications.map((item, i) => (
          <NotificationCard key={i} item={item} onPress={() => handlePress(item)} />
        ))}
      </Box>
    </>
  );
};
export default Notification;

const NotificationCard = ({ onPress, item }) => {
  return (
    <Pressable onPress={() => onPress(item)}>
      <HStack m={4} alignItems={'center'} space={2} borderBottomColor={'coolGray.200'} borderBottomWidth={1} p={2}>
        <Avatar source={{ uri: item?.android?.imageUrl }}>
          <Avatar.Badge color={'green.200'} />
        </Avatar>
        <VStack>
          <AppText fontWeight={500}>{item.title} </AppText>
          <AppText>{item.body} </AppText>
        </VStack>
      </HStack>
    </Pressable>
  );
};

const ROUTES = [
  {
    id: '1',
    title: 'Direct',
  },
  {
    id: '2',
    title: 'Overall',
  },
];
