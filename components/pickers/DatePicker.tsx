import React, { useState } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from '../../style/typography';
import { useTheme } from '../../hooks/useTheme';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ConvertDate } from '../../functions/helpers';
// import CalendarSvg from '../../assets/svgs/calendar';
import BlurModal from '../modals/blurModal';

const DatePicker = ({ onChange }: any) => {
    const [visible, setVisible] = React.useState(false);
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const { colors, borderRadius } = useTheme();

    const handleChange = (event: any, value: any) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
        onChange(value);
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => setVisible(true)}
                    activeOpacity={0.8}
                    style={[styles.pickerContainer, { backgroundColor: colors.card, borderRadius: borderRadius.input, borderColor: colors.border }]}
                >
                    <Text style={styles.pickedDate}>{ConvertDate(date)}</Text>
                    {/* <View style={styles.iconWrapper}>
                        <CalendarSvg />
                    </View> */}
                </TouchableOpacity>
            </View>
            <BlurModal visible={visible} setVisible={setVisible}>
                <DateTimePicker
                    value={date}
                    mode={'datetime'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={handleChange}
                    style={styles.datePicker}
                />
            </BlurModal>
        </>
    );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    pickerContainer: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderWidth: 0.5,
    },
    pickedDate: {
        fontSize: 18,
        color: 'black',
    },
    iconWrapper: {
        position: 'absolute',
        right: 20,
    },
    btnContainer: {
        padding: 30,
    },
    // This only works on iOS
    datePicker: {
        width: '100%',
        height: 200,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'flex-start',
    },
    modalWrapper: {
        height: 300,
        // marginTop: height - 300,
        // borderTopLeftRadius: 25,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderWidth: 0.5,
        alignItems: 'center',
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
        position: 'absolute',
        right: 20,
        top: 15,
    },
});

export default DatePicker;
