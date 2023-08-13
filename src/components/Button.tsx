import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

type Props = {
  onPress: () => void;
  innerText: string;
  bgColor: string;
  textColor: string;
  border: boolean;
  borderColor?: string;
  textDecoration?: string;
  width?: string;
  accessLabel: string;
  accessHint: string;
};

const Button = ({
  onPress,
  innerText,
  bgColor,
  border,
  borderColor,
  textColor,
  textDecoration,
  width,
  accessLabel,
  accessHint,
}: Props) => {
  return (
    <View className={`max-h-36  flex-row justify-center mx-auto w-${width}`}>
      <TouchableOpacity
        className={`${border ? `${borderColor}` : ''}
        flex justify-center px-6 align-center items-center w-full h-[52] rounded-lg mb-2 ${bgColor}`}
        onPress={onPress}
        accessible={true}
        accessibilityLabel={accessLabel}
        accessibilityHint={accessHint}
        accessibilityRole='button'
        >
        <Text
          className={`text-base font-semibold ${textColor} ${textDecoration ? `${textDecoration}` : ''
            }`}>
          {innerText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
