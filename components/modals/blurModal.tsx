import { StyleSheet, View, Modal, Dimensions } from 'react-native';
import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import { BlurView } from 'expo-blur';

type Props = {
    visible?: boolean;
    setVisible?: any;
    children?: any;
    hideDoneButton?: boolean;
};

const BlurModal = ({ hideDoneButton, visible, setVisible, children }: Props) => {
    const { colors } = useTheme();
    return (
        <>
            {visible ? (
                <BlurView tint="dark" intensity={50} style={[styles.screenPositioning]}>
                    {/* <GestureRecognizer style={{ flex: 1 }} onSwipeDown={() => setVisible(false)}> */}
                        <Modal animationType={'slide'} transparent={true} visible={visible} onRequestClose={() => setVisible(false)}>
                            <View style={[styles.modalWrapper, { backgroundColor: colors.card, borderColor: colors.grey }]}>
                                {hideDoneButton ? null : (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                        <View style={{ height: 20, width: 20 }} />
                                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.doneText}>
                                        <Text bold fontSize={15} color={'#91AAD4'}>
                                            Done
                                        </Text>
                                    </TouchableOpacity>
                                    </View>
                                )}
                                {/* <TouchableOpacity onPress={() => setVisible(false)} style={styles.dragger} /> */}
                                {children}
                            </View>
                        </Modal>
                    {/* </GestureRecognizer> */}
                </BlurView>
            ) : null}
        </>
    );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    animatiableFill: {
        ...StyleSheet.absoluteFillObject,
    },
    screenPositioning: {
        zIndex: 100,
        position: 'absolute',
        top: -20,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height
    },
    modalWrapper: {
        height: 270,
        marginTop: height - 270,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        justifyContent: 'center',
    },
    dragger: {
        width: 50,
        height: 5,
        borderRadius: 15,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    doneText: {
        paddingRight: 20
        // position: 'absolute',
        // right: 20,
        // top: -20,
        // zIndex: 100,
        // elevation: 100,
    },
    contentWrapper: {
        paddingHorizontal: 20,
    },
});

export default BlurModal;
