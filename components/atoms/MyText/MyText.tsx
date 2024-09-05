
import { useFonts } from 'expo-font';
import React from 'react';
import { Text, TextProps } from 'react-native';

export type fontFamilies = 'roboto' | 'inter' | 'inter-italic';
export type fontWeights = '400' | '700';

export interface CustomTextProps {
    children: React.ReactNode;
    font?: fontFamilies;
    weight?: fontWeights;
    size?: number;
    lineHeight?: number;
    color?: string
}

const fontMap = {
    roboto: {
        400: 'Roboto-Regular',
        700: 'Roboto-Bold',
    },
    inter: {
        400: 'Inter-Regular',
        700: 'Inter-Bold',
    },
    'inter-italic': {
        400: 'Inter-Italic',
        700: 'Inter-BoldItalic',
    },
};

const MyText: React.FC<CustomTextProps & TextProps> = ({
    children,
    font = 'roboto',
    weight = '400',
    size = 16,
    lineHeight = size * 1.5,
    color,
    style,
    ...props
}) => {
    const [loaded] = useFonts({
        'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.otf'),
        'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.otf'),
        'Inter-Regular': require('../../../assets/fonts/Inter-Regular.otf'),
        'Inter-Bold': require('../../../assets/fonts/Inter-Bold.otf'),
        'Inter-Italic': require('../../../assets/fonts/Inter-Italic.otf'),
        'Inter-BoldItalic': require('../../../assets/fonts/Inter-BoldItalic.otf'),
    });

    if (!loaded) {
        return null
    }

    const fontFamily = fontMap[font][weight];

    return (
        <Text
            style={[
                {
                    fontFamily,
                    fontSize: size,
                    lineHeight,
                    color
                },
                style
            ]}
            {...props}
        >
            {children}
        </Text>
    );
};

export default MyText;