import React from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants";
import MyText, { CustomTextProps } from "../../atoms/MyText/MyText";
import styles from "./MyButton.styles";

interface MyButtonProps {
  onPress: () => void;
  text: string;
  textProps?: Partial<CustomTextProps>;
  testID?: string;
}

export const MyButton: React.FC<MyButtonProps & TouchableOpacityProps> = ({
  onPress,
  text,
  textProps = {},
  style,
  testID,
  ...props
}) => {
  const { color = Colors.white, weight = '700', ...restTextProps } = textProps;
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[styles.container, style]}
      onPress={onPress}
      testID="my-button"
      accessible={true}
      {...props}
    >
      <MyText testID="my-text" color={color} weight={weight} {...restTextProps}>{text}</MyText>
    </TouchableOpacity>
  );
};