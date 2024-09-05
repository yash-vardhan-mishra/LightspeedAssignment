import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import ItemsRow from "./ItemsRow";
import { Colors } from "../../../constants";

// Meta configuration for ItemsRow
const meta = {
  title: "ItemsRow",
  component: ItemsRow,
  args: {
    itemName: "Sample Item",
    itemPrice: 29.99,
    count: 1,
    increaseCount: () => console.log("Increase count"),
    decreaseCount: () => console.log("Decrease count"),
  },
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: Colors.white }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ItemsRow>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story
export const Basic: Story = {};

// Story with a higher item count
export const HigherCount: Story = {
  args: {
    count: 5,
  },
};

// Story with a different item name
export const DifferentItemName: Story = {
  args: {
    itemName: "Special Edition Widget",
  },
};

// Story with a higher item price
export const HigherPrice: Story = {
  args: {
    itemPrice: 49.99,
  },
};
