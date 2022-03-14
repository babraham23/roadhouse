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

const ProfileIconSvg = (props: SvgProps) => {
    const { colors } = useTheme();
    let { focused } = props;
    return (
        <Svg data-name="Iconly/Light/Profile" width={24} height={24} {...props}>
            <G fill={focused ? colors.text : 'none'} stroke={focused ? colors.text : colors.dark_grey} strokeLinecap="round" strokeLinejoin="round">
                <Path
                    data-name="Stroke 1"
                    d="M11.984 15.346c-3.87 0-7.17.585-7.17 2.927s3.282 2.947 7.17 2.947c3.868 0 7.17-.586 7.17-2.927s-3.281-2.947-7.17-2.947Z"
                    strokeWidth={1.5}
                />
                <Path data-name="Stroke 3" d="M11.988 12.005a4.58 4.58 0 1 0-.032 0Z" strokeWidth={1.429} />
            </G>
        </Svg>
    );
};

export default ProfileIconSvg;
