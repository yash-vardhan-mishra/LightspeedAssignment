import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyCounter from '../components/molecules/MyCounter/MyCounter';

jest.mock('../components/atoms/MyText/MyText', () => 'Text');

describe('MyCounter', () => {
    // CASE#1
    it('renders with initial count', async () => {
        const count = 5;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();
        const { getByText } = render(<MyCounter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />);
        expect(getByText(String(count))).toBeTruthy();
    });

    // CASE#2
    it('calls decreaseCount when "-" is pressed', async () => {
        const count = 5;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();
        const { getByText } = render(<MyCounter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />);
        const decrementButton = getByText('-');
        fireEvent.press(decrementButton);
        expect(decreaseCount).toHaveBeenCalledTimes(1);
    });

    // CASE#3
    it('calls increaseCount when "+" is pressed', async () => {
        const count = 5;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();
        const { getByText } = render(<MyCounter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />);
        const incrementButton = getByText('+');
        fireEvent.press(incrementButton);
        expect(increaseCount).toHaveBeenCalledTimes(1);
    });

    // CASE#4
    it('does not call decreaseCount when count is 0', async () => {
        const count = 0;
        const increaseCount = jest.fn();
        const decreaseCount = jest.fn();
        const { getByText } = render(<MyCounter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />);
        const decrementButton = getByText('-');
        fireEvent.press(decrementButton);
        expect(decreaseCount).not.toHaveBeenCalled();
    });
    
});