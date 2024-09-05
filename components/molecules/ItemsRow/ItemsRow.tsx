import React from "react";
import { View } from "react-native";
import MyText from "../../atoms/MyText/MyText";
import { Colors } from "../../../constants";
import MyCounter from "../MyCounter/MyCounter";
import { formatToNzd } from "../../../utils";
import styles from "./ItemsRow.styles";

interface ItemsRowProps {
    itemName: string;
    itemPrice: number;
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
}

const ItemsRow = ({ itemName, itemPrice, count, increaseCount, decreaseCount }: ItemsRowProps) => {
    return (
        <View style={styles.container} >
            <View style={styles.itemLabelContainer}>
                <MyText numberOfLines={2} weight="400" size={16} color={Colors.outerSpace}>
                    {itemName}
                </MyText>
            </View>

            <View style={styles.itemCounterContainer}>
                <MyCounter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />
            </View>

            <View style={styles.itemPriceContainer}>
                <MyText weight="700" size={16} color={Colors.outerSpace}>
                    {formatToNzd(itemPrice * count)}
                </MyText>
            </View>
        </View >
    );
};

export default ItemsRow;
