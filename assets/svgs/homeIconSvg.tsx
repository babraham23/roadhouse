import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../hooks/useTheme';

type SvgProps = {
    width?: number;
    height?: number;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: any;
    title?: string;
    focused?: boolean;
};

const HomeIconSvg = (props: SvgProps) => {
    const { colors } = useTheme();
    let { width, height, color, focused } = props;
    return (
        <Svg data-name="Iconly/Light/Home" width={24} height={24} {...props}>
            <Path
                data-name="Home"
                d="M9.157 20.771V17.7a1.426 1.426 0 0 1 1.424-1.419h2.886A1.426 1.426 0 0 1 14.9 17.7h0v3.076A1.225 1.225 0 0 0 16.1 22h1.924a3.456 3.456 0 0 0 3.476-3.438h0V9.838a2.439 2.439 0 0 0-.962-1.9l-6.58-5.253a3.18 3.18 0 0 0-3.944 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.714A3.456 3.456 0 0 0 5.973 22H7.9a1.235 1.235 0 0 0 1.241-1.229h0"
                fill={focused ? colors.text : 'none'}
                stroke={focused ? colors.text : colors.dark_grey}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </Svg>
    );
};

export default HomeIconSvg;
