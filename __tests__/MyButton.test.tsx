import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Colors } from '../constants';
import { MyButton } from '../components/molecules/MyButton/MyButton';
import { Text } from 'react-native';

const MyTextMock = ({ children, ...props }: any) => {
    return <Text {...props}>{children}</Text>;
};

jest.mock('../components/atoms/MyText/MyText', () => ({
    __esModule: true,
    default: MyTextMock,
    displayName: 'MyText',
}));

describe('MyButton Component', () => {
    //CASE#1
    it('renders correctly with default props', () => {
        const onPressMock = jest.fn();
        const { getByTestId, getByText } = render(<MyButton onPress={onPressMock} text="Click me" />);

        const button = getByTestId('my-button');
        expect(button).toBeTruthy();
        expect(getByText('Click me')).toBeTruthy();
    });

    //CASE#2
    it('calls onPress when pressed', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<MyButton onPress={onPressMock} text="Press me" />);

        const button = getByTestId('my-button');
        fireEvent.press(button);
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    //CASE#3
    it('applies custom textProps', () => {
        const { getByText } = render(
            <MyButton
                onPress={() => { }}
                text="Custom Text"
                textProps={{ color: 'red', weight: '400' }}
            />
        );

        const text = getByText('Custom Text');
        expect(text.props.color).toBe('red');
        expect(text.props.weight).toBe('400');
    });

    //CASE#4
    it('applies default text color and weight when not provided', () => {
        const { getByTestId } = render(<MyButton onPress={() => { }} text="Default Props" />);

        const text = getByTestId('my-text');
        expect(text.props.color).toBe(Colors.white);
        expect(text.props.weight).toBe('700');
    });

    //CASE#5
    it('applies custom style to TouchableOpacity', () => {
        const customStyle = { backgroundColor: 'red' };
        const { getByTestId } = render(
            <MyButton onPress={() => { }} text="Styled Button" style={customStyle} />
        );

        const button = getByTestId('my-button');
        expect(button.props.style).toEqual(expect.objectContaining(customStyle));
    });

    //CASE#6
    it('passes additional TouchableOpacityProps and handles disabled state', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(
            <MyButton onPress={onPressMock} text="Disabled Button" disabled={true} />
        );

        const button = getByTestId('my-button');
        expect(button.props.accessibilityState.disabled).toBe(true);

        // ensure onPress is not called when disabled
        fireEvent.press(button);
        expect(onPressMock).not.toHaveBeenCalled();
    });
});
