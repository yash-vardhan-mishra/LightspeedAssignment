import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ItemsRow from '../components/molecules/ItemsRow/ItemsRow';

jest.mock('../components/atoms/MyText/MyText', () => 'Text');

jest.mock('../utils', () => ({
    formatToNzd: jest.fn((price) => `$${price.toFixed(2)}`),
}));

describe('ItemsRow', () => {
    // CASE#1
    it('renders with item name', () => {
        const itemName = 'Test Item';
        const itemPrice = 10;
        const count = 2;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();

        const { getByText } = render(
            <ItemsRow
                itemName={itemName}
                itemPrice={itemPrice}
                count={count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
            />
        );

        expect(getByText(itemName)).toBeTruthy();
    });

    // CASE#2
    it('renders with item price', async () => {
        const itemName = 'Test Item';
        const itemPrice = 10;
        const count = 2;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();
        const { getByText } = render(<ItemsRow itemName={itemName} itemPrice={itemPrice} count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />);
        expect(getByText('$20.00')).toBeTruthy();
    });

    // CASE#3
    it('calls increaseCount when "+" is pressed', async () => {
        const itemName = 'Test Item';
        const itemPrice = 10;
        const count = 2;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();
        const { getByText } = render(<ItemsRow itemName={itemName} itemPrice={itemPrice} count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />);
        const incrementButton = getByText('+');
        fireEvent.press(incrementButton);
        expect(increaseCount).toHaveBeenCalledTimes(1);
    });

    // CASE#4
    it('calls decreaseCount when "-" is pressed', async () => {
        const itemName = 'Test Item';
        const itemPrice = 10;
        const count = 2;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();
        const { getByText } = render(<ItemsRow itemName={itemName} itemPrice={itemPrice} count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />);
        const decrementButton = getByText('-');
        fireEvent.press(decrementButton);
        expect(decreaseCount).toHaveBeenCalledTimes(1);
    });
});