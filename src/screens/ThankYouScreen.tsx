import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import CelebrateImage from './../../assets/mega-creator_jump.png'

type ThankYouScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ThankYouScreen'
>;
type ThankYouScreenRouteProp = RouteProp<RootStackParamList, 'ThankYouScreen'>;

type Props = {
  navigation: ThankYouScreenNavigationProp;
  route: ThankYouScreenRouteProp;
};

const ThankYouScreen = ({navigation, route}: Props) => {
  const {logIn} = route.params || {logIn: true};

  const handleInfoPress = () => {
    const infoUrl =
      'https://www.cdc.gov/coronavirus/2019-ncov/your-health/isolation.html';
    Linking.openURL(infoUrl);
  };

  return (
    <SafeAreaView className="h-screen w-screen mx-auto my-auto flex-1 justify-between align-middle items-center">
      <ScrollView>
        <View className="flex-row justify-center mt-12">
          <Text className="text-4xl">Thank You!</Text>
        </View>
        <View className="flex-row justify-center mt-2">
        <Text className="text-lg text-center">
          Your test has been reported. We hope you feel better soon.
        </Text>
      </View>
          <Text className="text-lg ">
            Your test results have been reported.
          </Text>
        </View>
        <Image 
          className="mx-auto"
          source={CelebrateImage}
        />
        {/* <View className="border-2 border-black w-[286] h-[276] my-4 mx-auto"></View> */}
        <View className="flex-row justify-center ">
          <Text className="text-lg  px-10 text-center">
            {logIn
              ? 'You and 1,000 others in your zip code reported results this week.'
              : 'Join our community and save time on your next reporting by making an account today!'}
          </Text>
        </View>

      <Button
        onPress={() => navigation.navigate('HomeDash')}
        innerText="Take Me Home"
        bgColor="bg-white"
        textColor=""
        border={true}
        borderColor="border border-gray"
        width='full'
      />
      {/* {logIn ? (
            <Button
              onPress={() => navigation.navigate('HomeDash')}
              innerText="Take Me Home"
              bgColor="bg-white"
              textColor=""
              border={true}
              borderColor="border border-gray"
            />
          ) : (
            <>
              <Button
                onPress={() => navigation.navigate('Onboarding')}
                innerText="Create Account"
                bgColor="bg-white"
                textColor=""
                border={true}
                borderColor="border border-gray"
              />
              <Button
                onPress={() => navigation.navigate('LandingPage')}
                innerText="Back"
                bgColor=""
                textColor=""
                border={false}
                borderColor=""
              />
            </>
          )} */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default ThankYouScreen;
