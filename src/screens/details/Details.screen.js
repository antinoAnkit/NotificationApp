import React from 'react';
import {Box, HStack, IconButton, Icon, Image, VStack} from 'native-base';
// icons
import AntDesign from 'react-native-vector-icons/AntDesign';

import AppText from '../../components/text/AppText';

const Details = props => {
  const {item} = props.route.params;
  console.log(item);
  return (
    <>
      <Box safeAreaTop bg={'background.50'} />
      <Box flex={1} bg={'background.50'} p={'4'}>
        {/* Top bar */}
        <HStack justifyContent={'space-between'} alignItems={'center'} p={'4'}>
          <AppText textAlign={'center'} fontSize={22} fontWeight={600}>
            {'Details'}
          </AppText>
          <IconButton
            variant="subtle"
            rounded={100}
            colorScheme={'coolGray'}
            onPress={() => props.navigation.goBack()}
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

        <Image
          source={{uri: item?.android?.imageUrl}}
          height={100}
          width={100}
          alt="IMAGE_NOT_FOUND!!"
          my={'10'}
          alignSelf="center"
        />
        <VStack space={4} alignItems={'center'}>
          <AppText fontSize={16} fontWeight={600}>
            {item.title}
          </AppText>
          <AppText>{item.body}</AppText>
        </VStack>
      </Box>
    </>
  );
};
export default Details;
