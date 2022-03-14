import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
import { useTheme } from '../../hooks/useTheme';

const FilterSvg = (props: SvgProps) => {
    const { colors } = useTheme();
    return (
        <Svg data-name="Iconly/Light/Filter" width={24} height={24} {...props}>
            <G fill="none" stroke={colors.text} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <Path data-name="Stroke 1" d="M10.329 16.593h-6.3" />
                <Path data-name="Stroke 3" d="M13.14 6.9h6.3" />
                <Path data-name="Stroke 5" d="M8.726 6.846a2.363 2.363 0 1 0-2.363 2.347 2.355 2.355 0 0 0 2.363-2.347Z" />
                <Path data-name="Stroke 7" d="M20 16.553a2.363 2.363 0 1 0-2.362 2.347A2.354 2.354 0 0 0 20 16.553Z" />
            </G>
        </Svg>
    );
};

export default FilterSvg;
