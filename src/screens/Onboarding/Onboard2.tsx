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
import ProgressDots from '../../components/ProgressDots';



const Onboard2 = () => {


    return (
        <>
            <SafeAreaView className="h-screen w-screen">
                <View className="flex-1 flex-col mb-3">

                    {/* image and text */}
                    <View className="m-5 flex-1">
                        <Image className="w-full" source={NoImage}></Image>
                        <Text className="mx-auto py-5">What the data is used for</Text>
                    </View>

                    {/* container for dots and buttons */}
                    <View className="flex-1 flex-col-reverse">

                        

                        {/* buttons */}
                        <View className="m-5">
                            <TouchableOpacity className="rounded border justify-items-center">
                                <Text className="text-center py-3">Continue</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="justify-items-center">
                                <Text className="text-center py-3">Skip</Text>
                            </TouchableOpacity>
                        </View>

                        {/* progress dots */}
                        <ProgressDots page={2} />

                    </View>
                </View>
            </SafeAreaView>
        </>
    )

}

export default Onboard2;