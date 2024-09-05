import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { View } from "react-native";
import MyCounter from "./MyCounter";
import { Colors } from "../../../constants";

// Meta configuration for MyCounter
const meta = {
    title: "MyCounter",
    component: MyCounter,
    args: {
        count: 0,
        increaseCount: () => { },
        decreaseCount: () => { },
    },
    decorators: [
        (Story) => (
            <View style={{ backgroundColor: Colors.white, alignItems: 'center' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof MyCounter>;

export default meta;

type Story = StoryObj<typeof meta>;

// Utility to create a story with state management for the count
const CounterTemplate = (args: any) => {
    const [count, setCount] = useState(args.count);

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <MyCounter
            count={count}
            increaseCount={handleIncrease}
            decreaseCount={handleDecrease}
        />
    );
};

// Default story with the counter at 0
export const Basic: Story = {
    render: (args) => <CounterTemplate {...args} />,
};

// Story with a higher initial count
export const HigherCount: Story = {
    args: {
        count: 10,
    },
    render: (args) => <CounterTemplate {...args} />,
};

// Story with custom increase and decrease handlers, with no negative count
export const CustomHandlers: Story = {
    render: (args) => <CounterTemplate {...args} />,
};
