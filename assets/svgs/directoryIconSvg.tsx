import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
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

const DirectoryIconSvg = (props: SvgProps) => {
    const { colors } = useTheme();
    let { height, width, focused, color } = props;
    return (
        <Svg data-name="Iconly/Light/3 User" width={24} height={24} {...props}>
            <G
                data-name="3 User"
                fill={focused ? colors.text : 'none'}
                stroke={focused ? colors.text : colors.dark_grey}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            >
                <Path data-name="Stroke 1" d="M17.888 10.897a2.876 2.876 0 0 0 2.472-2.841 2.875 2.875 0 0 0-2.406-2.836" />
                <Path data-name="Stroke 3" d="M19.729 14.25c1.351.2 2.294.675 2.294 1.65 0 .671-.444 1.107-1.162 1.381" />
                <Path data-name="Stroke 5" d="M11.887 14.664c-3.214 0-5.959.487-5.959 2.432s2.728 2.445 5.959 2.445c3.214 0 5.958-.482 5.958-2.428s-2.727-2.449-5.958-2.449Z" />
                <Path data-name="Stroke 7" d="M11.887 11.888a3.805 3.805 0 1 0-.028 0Z" />
                <Path data-name="Stroke 9" d="M5.885 10.897a2.871 2.871 0 0 1-.066-5.677" />
                <Path data-name="Stroke 11" d="M4.044 14.25c-1.351.2-2.294.675-2.294 1.65 0 .671.444 1.107 1.162 1.381" />
            </G>
        </Svg>
    );
};

export default DirectoryIconSvg;
