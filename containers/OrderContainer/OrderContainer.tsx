import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import ItemsList, { Item } from "../../components/organisms/ItemsList/ItemsList";
import { MyButton } from "../../components/molecules/MyButton/MyButton";
import styles from "./OrderContainer.styles";
import { fetchOrderData } from "../../services/Orders";
import { itemRowTotalWidth } from "../../constants/dimensions";
import { debounce } from "lodash";
import MyText from "../../components/atoms/MyText/MyText";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const OrderContainer = () => {
    const insets = useSafeAreaInsets();
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    // use debounce in fetchOrderData
    const getOrderData = useCallback(
        debounce(async () => {
            try {
                const res = await fetchOrderData();
                if (Array.isArray(res) && res.length) {
                    // added the initial count to 0
                    const orderData = res.map(item => ({ ...item, count: 0 }));
                    setItems(orderData);
                }
            } catch {
                Alert.alert('Error', 'Error fetching data');
            } finally {
                setLoading(false);
            }
        }, 1000),
        []
    );

    useEffect(() => {
        setLoading(true);
        getOrderData();
    }, [getOrderData]);

    // memoized the increase count function
    const increaseCount = useCallback((id: number) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.count < 99
                    ? { ...item, count: item.count + 1 }
                    : item
            )
        );
    }, []);

    // memoized the decrease count function
    const decreaseCount = useCallback((id: number) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.count > 0
                    ? { ...item, count: item.count - 1 }
                    : item
            )
        );
    }, []);

    // memoized the total price
    const totalPrice = useMemo(
        () => items.reduce((acc, item) => acc + item.price * item.count, 0),
        [items]
    );

    const handleNewOrder = useCallback(() => {
        setLoading(true);
        setItems([]);
        getOrderData();
    }, [getOrderData]);

    const renderShimmer = useCallback(
        (itm: number) => (
            <ShimmerPlaceholder
                key={itm}
                width={itemRowTotalWidth}
                height={36}
                style={styles.shimmerStyle}
            />
        ),
        []
    );

    // Memoized empty list component
    const renderEmptyListComponent = useMemo(() => (
        <View style={styles.emptyListComponent}>
            <MyText style={styles.emptyListText}>Unable to fetch the data</MyText>
            <MyButton text="Fetch the items again" onPress={handleNewOrder} />
        </View>
    ), [handleNewOrder]);

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <MyButton disabled={loading} onPress={handleNewOrder} style={styles.buttonContainer} text='New order' />
            {loading ?
                <View style={styles.shimmerContainer}>
                    {Array.from({ length: 4 }, (_, idx) => renderShimmer(idx))}
                </View>
                : <ItemsList
                    items={items}
                    increaseCount={increaseCount}
                    decreaseCount={decreaseCount}
                    totalPrice={totalPrice}
                    renderEmptyListComponent={renderEmptyListComponent}
                />
            }
        </View>
    );
};


export default OrderContainer;
