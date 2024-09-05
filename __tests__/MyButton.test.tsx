
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CustomTextProps } from '../components/atoms/MyText/MyText';
import { Colors } from '../constants';
import { MyButton } from '../components/molecules/MyButton/MyButton';
import { Text } from 'react-native';

const MyTextMock = ({ children, ...props }: CustomTextProps) => {
    // Render the children as text
    return <Text {...props}>{children}</Text>;
};

jest.mock('../components/atoms/MyText/MyText.tsx', () => ({
    __esModule: true,
    default: MyTextMock,
    displayName: 'MyText'
}));

describe('MyButton Component', () => {
    describe('MyButton Component', () => {
        it('renders correctly with default props', async () => {
            const onPressMock = jest.fn();
            const { getByTestId, getByText, debug } = render(<MyButton onPress={onPressMock} text="Click me" />);

            const button = getByTestId('my-button');

            expect(button).toBeTruthy();

            await waitFor(() => getByText('Click me'));

            const text = getByText('Click me')

            expect(text).toBeTruthy(); // Check if the text exists

            // Debug the component structure
            debug();
        });
    });


    it('calls onPress when pressed', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<MyButton onPress={onPressMock} text="Press me" />);

        const button = getByTestId('my-button');
        fireEvent.press(button);
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('applies custom textProps', () => {
        const { getByTestId, getByText } = render(
            <MyButton
                onPress={() => { }}
                text="Custom Text"
                textProps={{ color: 'red', weight: '400' }}
            />
        );

        const button = getByTestId('my-button');
        const text = getByText('Custom Text');

        expect(text.props.color).toBe('red');
        expect(text.props.weight).toBe('400');
    });

    it('applies default text color and weight when not provided', () => {
        const { getByTestId } = render(<MyButton onPress={() => { }} text="Default Props" />);
    
        const button = getByTestId('my-button');
        expect(button.props.children[0].props.color).toBe(Colors.white);
        expect(button.props.children[0].props.weight).toBe('700');
    });

    it('applies custom style to TouchableOpacity', () => {
        const customStyle = { backgroundColor: 'red' };
        const { getByTestId } = render(
            <MyButton onPress={() => { }} text="Styled Button" style={customStyle} />
        );

        const button = getByTestId('my-button');
        expect(button.props.style).toEqual(expect.objectContaining(customStyle));
    });

    it('passes additional TouchableOpacityProps', () => {
        const { getByTestId } = render(
            <MyButton onPress={() => { }} text="Disabled Button" disabled={true} />
        );

        const button = getByTestId('my-button');
        expect(button.props.accessibilityState.disabled).toBe(true);
    });
});
