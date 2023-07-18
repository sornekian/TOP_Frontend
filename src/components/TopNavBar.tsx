import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import ProgressDots from './ProgressDots';

type Props = {
  textSize: string;
  textValue: string;
  fontFamily: string;
  haveProgress: boolean;
  page?: number;
}

const TopNavBar = ({ textSize, textValue, fontFamily, haveProgress, page }: Props) => {
  return (
    <View className='h-[110] flex-1 mb-6'>
      <View className="flex-row mt-6 mb-2">
        <TouchableOpacity className="mt-2 ml-4">
          <Icon name="arrowleft" size={30} color="#000" className="" />
        </TouchableOpacity>
        <Text className={`text-${textSize} font-bold mx-auto mt-2 flex pr-12 font-${fontFamily}`}>
          {textValue}
        </Text>
      </View>
      <View className='border-slate-200 border-b-4 pb-4'>
        {
          haveProgress ?
            page ?
              <ProgressDots page={page} />
              :
              null :
            null
        }
      </View>
    </View >
  )
}

export default TopNavBar