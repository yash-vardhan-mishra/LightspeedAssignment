import React from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants";
import MyText, { CustomTextProps } from "../../atoms/MyText/MyText";
import styles from "./MyButton.styles";

interface MyButtonProps {
  onPress: () => void;
  text: string;
  textProps?: Partial<CustomTextProps>;
}

export const MyButton: React.FC<MyButtonProps & TouchableOpacityProps> = ({ onPress, text, textProps = {}, style, ...props }) => {
  const { color = Colors.white, weight = '700', ...restTextProps } = textProps;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} {...props}>
      <MyText color={color} weight={weight} {...restTextProps}>{text}</MyText>
    </TouchableOpacity>
  );
};

