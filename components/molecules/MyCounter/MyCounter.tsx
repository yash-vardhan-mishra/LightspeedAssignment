import React from "react";
import { View, Pressable } from "react-native";
import MyText, { CustomTextProps } from "../../atoms/MyText/MyText";
import { Colors } from "../../../constants";
import styles from "./MyCounter.styles";

const customHitSlop = { top: 8, right: 12, bottom: 8, left: 12 };

interface CounterProps {
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
}

const MyCounter = ({ count, increaseCount, decreaseCount }: CounterProps) => {
    const textProps: Partial<CustomTextProps> = {
        weight: '700',
        color: Colors.outerSpace
    }

    return (
        <View style={styles.container}>
            <Pressable hitSlop={customHitSlop} style={styles.pressableText} onPress={decreaseCount}>
                <MyText {...textProps}>-</MyText>
            </Pressable>
            <View style={styles.countContainer}>
                <MyText {...textProps}>{count}</MyText>
            </View>
            <Pressable hitSlop={customHitSlop} style={styles.pressableText} onPress={increaseCount}>
                <MyText {...textProps}>+</MyText>
            </Pressable>
        </View>
    );
};

export default MyCounter;