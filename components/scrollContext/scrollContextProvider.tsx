import React, { useState, useRef } from 'react';
import { ScrollView as ScrollViewNative, ScrollViewProps, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FadeHeader from './fadeHeader';

interface ScrollContextInterface {
    opacity: number;
    maxOffset: number;
    offset: number;
    titleShowing: boolean;
    updateOffset(val: number): void;
    updateScroll(val: number): void;
}

interface HeaderProps {
    title?: string;
    hideBack?: boolean;
    onBackPress?: any;
    hideClose?: boolean;
    onClosePress?: any;
}

interface ChildProps {
    children: JSX.Element[] | JSX.Element;
    bounces?: boolean;
    headerLeft?: any;
    ref?: any;
    hideBasket?: boolean;

    title?: string;
    onBackPress?: any;
    hideBack?: boolean;
    hideClose?: boolean;
    onClosePress?: any;
    style?: any;
}

const withinLimits = (val: number, min: number, max: number): number => (val > max ? max : val < min ? min : val);

export const ScrollContext = React.createContext<ScrollContextInterface>({
    opacity: 0,
    maxOffset: 0,
    offset: 0,
    titleShowing: false,
    updateOffset: (val: number) => {},
    updateScroll: (val: number) => {},
});

export const useScroller = () => React.useContext(ScrollContext);

export const ScrollContextProvider = (props: ChildProps) => {
    const minOffset: number = 0;
    const maxOffset: number = 40;
    const [offset, setOffset] = useState(0);
    const [titleShowing, setTitleShowing] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const updateOffset = (val: number) => {
        setOffset(withinLimits(val, minOffset, maxOffset));
        setTitleShowing(val >= maxOffset);
        setOpacity(withinLimits((val * maxOffset) / 1000, 0, 1));
    };

    const ScrollRef: any = useRef(null);

    const updateScroll = (val: number) => {
        ScrollRef.current.scrollTo({ x: 0, y: val, animated: true });
    };

    return (
        <>
            <ScrollContext.Provider
                value={{
                    opacity: opacity,
                    maxOffset: maxOffset,
                    offset: offset,
                    titleShowing: titleShowing,
                    updateOffset: updateOffset,
                    updateScroll: updateScroll,
                }}
            >
                <>
                    <FadeHeader title={props.title} onBackPress={props.onBackPress} onClosePress={props.onClosePress} hideBack={props.hideBack} hideClose={props.hideClose} />
                    <ScrollView style={props.style} bounces={props.bounces} ref={ScrollRef}>
                        {props.children}
                    </ScrollView>
                </>
            </ScrollContext.Provider>
        </>
    );
};

export const ScrollView = React.forwardRef((props: ChildProps & ScrollViewProps, ref: any) => {
    const { updateOffset } = useScroller();
    const { colors } = useTheme();
    return (
        <ScrollViewNative
            {...props}
            onScroll={({ nativeEvent }) => {
                updateOffset(nativeEvent.contentOffset.y);
            }}
            scrollEventThrottle={200}
            ref={ref}
        >
            {props.children}
        </ScrollViewNative>
    );
});

export default ScrollContextProvider;
