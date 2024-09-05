import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import MyText from "./MyText";

const meta = {
  title: "MyText",
  component: MyText,
  args: {
    children: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DifferentFont: Story = {
  args: {
    font: "inter-italic",
  },
};

export const DifferentWeight: Story = {
  args: {
    weight: "700",
  },
};

export const DifferentSize: Story = {
  args: {
    size: 24,
  },
};

export const DifferentLineHeight: Story = {
  args: {
    lineHeight: 32,
  },
};
