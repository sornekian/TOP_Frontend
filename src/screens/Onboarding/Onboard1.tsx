import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import NoImage from '../../../assets/nopicture.png'
import ProgressDots from '../../components/ProgressDots'
// import { useNavigation } from '@react-navigation/native';
// import Onboard2 from './Onboard2';
// import { RootStackParamList } from '../../../App'
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Props = {};

// export type NavigationProp = NativeStackNavigationProp<
// RootStackParamList,
// 'Onboard1'
// > 

const Onboard1 = () => {

    //below is not ready yet
    // const navigation = useNavigation();

    // const handleContinuePress = () => {
    //     navigation.navigate("Onboard2");
    // }

    return (
        <>
            <SafeAreaView className="h-screen w-screen">
                <View className="flex-1 flex-col mb-3">

                    {/* image and text */}
                    <View className="m-5 flex-1">
                        <Image className="w-full" source={NoImage}></Image>
                        <Text className="mx-auto py-5 font-sans text-[22px]">What the app does and the impact of data</Text>
                    </View>

                    {/* container for dots and buttons */}
                    <View className="flex-1 flex-col-reverse">


                        {/* buttons */}
                        <View className="m-5">
                            <TouchableOpacity className="rounded border justify-items-center">
                                {/* onPress={handleContinuePress} */}
                                <Text className="text-center py-3 font-sans text-[22px]">Continue</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="justify-items-center">
                                <Text className="text-center py-3 font-sans text-[22px]">Skip</Text>
                            </TouchableOpacity>
                        </View>

                        {/* progress dots */}
                        
                            <ProgressDots page={1} />

                    </View>
                </View>
            </SafeAreaView>
        </>
    )

}

export default Onboard1;