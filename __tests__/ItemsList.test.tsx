import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ItemsList from '../components/organisms/ItemsList/ItemsList';
import { ItemsRowProps } from '../components/molecules/ItemsRow/ItemsRow';
import MyText from '../components/atoms/MyText/MyText';

// Mock dependencies
jest.mock('../components/atoms/MyText/MyText', () => 'Text');

jest.mock('../components/molecules/ItemsRow/ItemsRow', () => {
    const { View, Text, TouchableOpacity } = require('react-native'); // Import inside mock
    return function MockItemsRow(props: ItemsRowProps) {
        return (
            <View testID="items-row">
                <Text>{`${props.itemName} - $${props.itemPrice} - Count: ${props.count}`}</Text>
                <TouchableOpacity testID="increase-button" onPress={() => props.increaseCount()}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity testID="decrease-button" onPress={() => props.decreaseCount()}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        );
    };
});
jest.mock('../utils', () => ({
    formatToNzd: jest.fn(price => `$${price.toFixed(2)}`),
}));

describe('ItemsList', () => {
    const mockIncreaseCount = jest.fn();
    const mockDecreaseCount = jest.fn();
    const mockRenderEmptyListComponent = <MyText>Empty list</MyText>;

    beforeEach(() => {
        mockIncreaseCount.mockClear();
        mockDecreaseCount.mockClear();
    });

    // CASE#1
    it('renders correctly with items', () => {
        const items = [
            { id: 1, name: 'Item 1', price: 10, count: 2 },
            { id: 2, name: 'Item 2', price: 20, count: 1 },
        ];
        const { getByText, getAllByTestId } = render(
            <ItemsList
                items={items}
                increaseCount={mockIncreaseCount}
                decreaseCount={mockDecreaseCount}
                totalPrice={40}
                renderEmptyListComponent={mockRenderEmptyListComponent}
            />
        );

        expect(getByText('Total')).toBeTruthy();
        expect(getByText('$40.00')).toBeTruthy();
        expect(getAllByTestId('items-row')).toHaveLength(2);
    });

    // CASE#2
    it('renders empty list component when there are no items', () => {
        const { getByText } = render(
            <ItemsList
                items={[]}
                increaseCount={mockIncreaseCount}
                decreaseCount={mockDecreaseCount}
                totalPrice={0}
                renderEmptyListComponent={mockRenderEmptyListComponent}
            />
        );

        expect(getByText('Empty list')).toBeTruthy();
        expect(getByText('$0.00')).toBeTruthy();
    });

    // CASE#3
    it('passes correct props to ItemsRow and handles interactions', () => {
        const items = [
            { id: 1, name: 'Item 1', price: 10, count: 2 },
        ];
        const { getByText, getByTestId } = render(
            <ItemsList
                items={items}
                increaseCount={mockIncreaseCount}
                decreaseCount={mockDecreaseCount}
                totalPrice={20}
                renderEmptyListComponent={mockRenderEmptyListComponent}
            />
        );

        expect(getByText('Item 1 - $10 - Count: 2')).toBeTruthy();

        fireEvent.press(getByTestId('increase-button'));
        expect(mockIncreaseCount).toHaveBeenCalledWith(1);

        fireEvent.press(getByTestId('decrease-button'));
        expect(mockDecreaseCount).toHaveBeenCalledWith(1);
    });
});