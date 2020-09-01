import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

export default function Card(props: {}) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text>CardHeader</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffff',
        flex: 2,
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    cardHeader: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
    },
});