import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useCreateUserMutation, useGetUsersQuery } from '../../graphql/generated/output';

const TestScreen = () => {
    const [createUser] = useCreateUserMutation();
    const users = useGetUsersQuery();

    const createUserHandler = async () => {
        const user = await createUser({
            variables: {
                email: 'brettabraham23@gmail.com',
                firstName: 'Brett',
                lastName: '',
            },
        });
        if (user.data?.createUser) console.log(user)
        else console.log('failure')
        // const users = await allUsers()
    };

    // console.log(users.data?.allUsers);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => createUserHandler()} style={styles.button}>
                <Text>Test</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'green',
        height: 50,
        width: '100%',
    },
});
