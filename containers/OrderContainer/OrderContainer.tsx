import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemsList from "../../components/organisms/ItemsList/ItemsList";
import { MyButton } from "../../components/molecules/MyButton/MyButton";
import styles from "./OrderContainer.styles";

const initialItems = [
    { id: 1, name: "Coconut Dahl", price: 14.0, count: 1 },
    { id: 2, name: "Gesh Bowl", price: 13.0, count: 1 },
    { id: 3, name: "Pavlova", price: 10.0, count: 1 },
    { id: 4, name: "Latte", price: 8.0, count: 1 },
    { id: 5, name: "Cappuccino", price: 8.0, count: 1 },
    { id: 6, name: "Brew", price: 8.0, count: 1 },
    { id: 7, name: "Brew2", price: 8.0, count: 1 },
    { id: 8, name: "Brew3", price: 8.0, count: 1 },
    { id: 9, name: "Brew4", price: 8.0, count: 1 },
    { id: 10, name: "Brew5", price: 8.0, count: 1 },
    { id: 11, name: "Brew6", price: 8.0, count: 1 },
    { id: 12, name: "Brew7", price: 8.0, count: 1 },
    { id: 13, name: "Brew8", price: 8.0, count: 1 },
];

const OrderContainer = () => {
    const [items, setItems] = useState(initialItems);

    const increaseCount = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.count < 99 ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decreaseCount = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.count > 0
                    ? { ...item, count: item.count - 1 }
                    : item
            )
        );
    };

    const calculateTotalPrice = () => {
        return items.reduce((acc, item) => acc + item.price * item.count, 0);
    };

    const handleNewOrder = () => {
        // Handle the new order logic here
        console.log("New Order placed!");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <MyButton text='New order' onPress={() => console.log('this happened')} />
            </View>
            <ItemsList
                items={items}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                totalPrice={calculateTotalPrice()}
            //   onNewOrder={handleNewOrder}
            />
        </SafeAreaView>
    );
};


export default OrderContainer;
