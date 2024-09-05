import React from 'react';
import { render } from '@testing-library/react-native';
import MyText from '../components/atoms/MyText/MyText';

// Mock the useFonts hook
jest.mock('expo-font', () => ({
  useFonts: jest.fn(() => [true]),
}));

// Mock the font require statements
jest.mock('../assets/fonts/Roboto-Bold.otf', () => '');
jest.mock('../assets/fonts/Roboto-Regular.otf', () => '');
jest.mock('../assets/fonts/Inter-Regular.otf', () => '');
jest.mock('../assets/fonts/Inter-Bold.otf', () => '');
jest.mock('../assets/fonts/Inter-Italic.otf', () => '');
jest.mock('../assets/fonts/Inter-BoldItalic.otf', () => '');

describe('MyText Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<MyText>Hello World</MyText>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontFamily: 'Roboto-Regular',
          fontSize: 16,
          lineHeight: 24,
        }),
      ])
    );
  });

  it('applies custom font family and weight', () => {
    const { getByText } = render(
      <MyText font="inter" weight="700">
        Custom Font
      </MyText>
    );
    const textElement = getByText('Custom Font');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontFamily: 'Inter-Bold',
        }),
      ])
    );
  });

  it('applies custom size and line height', () => {
    const { getByText } = render(
      <MyText size={20} lineHeight={30}>
        Custom Size
      </MyText>
    );
    const textElement = getByText('Custom Size');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 20,
          lineHeight: 30,
        }),
      ])
    );
  });

  it('applies custom color', () => {
    const { getByText } = render(<MyText color="red">Colored Text</MyText>);
    const textElement = getByText('Colored Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: 'red',
        }),
      ])
    );
  });

  it('passes additional TextProps', () => {
    const { getByText } = render(
      <MyText numberOfLines={2} ellipsizeMode="tail">
        Long text that should be truncated
      </MyText>
    );
    const textElement = getByText('Long text that should be truncated');
    expect(textElement.props.numberOfLines).toBe(2);
    expect(textElement.props.ellipsizeMode).toBe('tail');
  });
});