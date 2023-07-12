import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type Props = {
  onPress: () => void;
  text: string;
  bgColor: string;
};

const Button = ({onPress, text, bgColor}: Props) => {
  return (
    <TouchableOpacity
      className={`border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg mb-3 ${bgColor}`}
      onPress={onPress}>
      <Text className="text-lg font-bold">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
