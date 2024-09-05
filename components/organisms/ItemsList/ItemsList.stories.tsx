import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { View } from "react-native";
import ItemsList, { Item } from "./ItemsList";
import { Colors } from "../../../constants";
import MyText from "../../atoms/MyText/MyText";

// Sample items data
const sampleItems = [
    { id: 1, name: "Item 1", price: 10, count: 1 },
    { id: 2, name: "Item 2", price: 20, count: 2 },
    { id: 3, name: "Item 3", price: 30, count: 3 },
];

// Meta configuration for ItemsList
const meta = {
    title: "ItemsList",
    component: ItemsList,
    args: {
        items: sampleItems,
        totalPrice: sampleItems.reduce((acc, item) => acc + item.price * item.count, 0),
        renderEmptyListComponent: <View><MyText>No items available</MyText></View>,
    },
    decorators: [
        (Story) => (
            <View style={{ backgroundColor: Colors.white, flex: 1 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof ItemsList>;

export default meta;

type Story = StoryObj<typeof meta>;

// Utility to handle item count state
const ItemsListTemplate = (args: any) => {
    const [items, setItems] = useState(args.items);

    const increaseCount = (id: number) => {
        setItems((prevItems: Item[]) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decreaseCount = (id: number) => {
        setItems((prevItems: Item[]) =>
            prevItems.map((item) =>
                item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
            )
        );
    };

    const totalPrice = items.reduce((acc: number, item: Item) => acc + item.price * item.count, 0);

    return (
        <ItemsList
            {...args}
            items={items}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            totalPrice={totalPrice}
        />
    );
};

// Default story with sample items
export const Basic: Story = {
    render: (args) => <ItemsListTemplate {...args} />,
};

// Story with an empty list
export const EmptyList: Story = {
    args: {
        items: [],
    },
    render: (args) => <ItemsListTemplate {...args} />,
};

// Story with a larger list
export const LargeList: Story = {
    args: {
        items: [
            ...sampleItems,
            { id: 4, name: "Item 4", price: 40, count: 4 },
            { id: 5, name: "Item 5", price: 50, count: 5 },
        ],
    },
    render: (args) => <ItemsListTemplate {...args} />,
};
