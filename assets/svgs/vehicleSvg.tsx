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

const VehicleSvg = (props: SvgProps) => {
    const { colors } = useTheme();
    let { width, height, color, focused } = props;
    return (
        <Svg viewBox="0 0 388.223 388.223" {...props} width={28} height={28} stroke={colors.text} fill={colors.text}>
            <Path d="M388.223 160.284h-22.944l-30-136.252H52.943l-30 136.252H0v139.15h20v64.756h100v-64.756h148.223v64.756h100v-64.756h20v-139.15zM30 269.435v-79.15h328.223v79.15H30zM77.057 54.032h234.109l23.395 106.252H53.662L77.057 54.032zM90 334.19H50v-34.756h40v34.756zm248.223 0h-40v-34.756h40v34.756z" />
            <Path d="M49.575 214.859h40v30h-40zM298.648 214.859h40v30h-40z" />
        </Svg>
    );
};

export default VehicleSvg;
