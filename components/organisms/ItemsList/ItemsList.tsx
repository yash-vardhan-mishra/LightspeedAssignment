import React from "react";
import { View, FlatList } from "react-native";
import MyText from "../../atoms/MyText/MyText";
import ItemsRow from "../../molecules/ItemsRow/ItemsRow";
import { formatToNzd } from "../../../utils";
import { SCREEN_HEIGHT } from "../../../constants/dimensions";
import styles from "./ItemsList.styles";

interface Item {
    id: number;
    name: string;
    price: number;
    count: number;
}

interface ItemsListProps {
    items: Item[];
    increaseCount: (id: number) => void;
    decreaseCount: (id: number) => void;
    totalPrice: number;
}

const ItemsList = ({ items, increaseCount, decreaseCount, totalPrice }: ItemsListProps) => {
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={items}
                style={{ paddingBottom: 12, maxHeight: 0.8 * SCREEN_HEIGHT }}
                renderItem={({ item }) => (
                    <ItemsRow
                        key={item.id}
                        itemName={item.name}
                        itemPrice={item.price}
                        count={item.count}
                        increaseCount={() => increaseCount(item.id)}
                        decreaseCount={() => decreaseCount(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            <View style={styles.totalContainer}>
                <MyText weight="700" size={24} >
                    Total
                </MyText>
                <MyText weight="700" size={24} >
                    {formatToNzd(totalPrice)}
                </MyText>
            </View>
        </View>
    );
};

export default ItemsList;
