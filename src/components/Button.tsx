import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

type Props = {
  onPress: () => void;
  innerText: string;
  bgColor: string;
  textColor: string;
  border: boolean;
  borderColor?: string;
};

const Button = ({
  onPress,
  innerText,
  bgColor,
  border,
  borderColor,
  textColor,
}: Props) => {
  return (
    <View className="w-screen flex-row mx-auto">
      <TouchableOpacity
        className={`${
          border ? `${borderColor}` : ''
        } flex justify-center items-center w-[342] h-[52] rounded-lg mb-3 ${bgColor}`}
        onPress={onPress}>
        <Text className={`text-lg font-bold ${textColor}`}>{innerText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
