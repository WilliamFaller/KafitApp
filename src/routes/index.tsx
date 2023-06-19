import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from '../Components/Box';
import MyTrainings from '../Components/MyTrainings';

export default function Routes() {
    const name = "William Faller L.A. Santos"
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Hello,</Text>
                <Text style={styles.textName}>{name}</Text>
                <View style={styles.boxContainer}>
                    <Box title={"Treinos no mês"} data={"13"} />
                    <Box title={"Ranking"} data={"8°"} />
                </View>
                <MyTrainings />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    trainings: {
        paddingVertical: 20,
        gap: 10,
    },
    training: {
        borderRadius: 20,
        width: '100%',
        height: 80,
        backgroundColor: '#20232C',
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textName: {
        color: '#EE141F',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});
