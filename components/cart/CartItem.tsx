import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import { Text, View } from '../Themed';

const colorScheme = useColorScheme();

export default function CartItem({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/cart/' + item.img)}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.infoTitle}>{item.name}</Text>
                <Text style={styles.infoPrice}>{item.currency}{item.price}{' / '}{item.unit}</Text>
            </View>
            <View style={styles.qty}>
                <Text style={styles.qtyTxt}>{item.qty}{' '}{item.unit}</Text>
                <Text style={styles.total}>{item.currency}{' '}{item.price * item.qty}</Text>
            </View>
            <View style={styles.gears}>
                <Text>{item.name}</Text>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#bcbebd',
        borderBottomWidth: 0.1,
    },
    imgContainer: {
        flex: 1,
        width: '20%',
        flexDirection: 'row',
        padding: 5,
    },
    image: {
        width: 60,
        height: 60,
    },
    info: {
        flex: 1,
        width: '50%',
        padding: 5,
        paddingLeft: 20,
        alignItems: 'flex-start',
    },
    qty: {
        flex: 1,
        width: '10%',
        padding: 5,
        alignItems: 'center',
    },
    qtyTxt: {
        fontSize: 12,
        fontWeight: '600',
        color: '#a3a3a3',        
        textAlign: 'center',
        paddingBottom: 10,
    },
    total: {
        fontSize: 12,
        fontWeight: '600',        
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
        color: '#ffffff',
        backgroundColor: '#909590',
        minWidth: 60,
        maxWidth: '100%',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 10,
    },
    infoPrice: {
        fontSize: 12,
        fontWeight: '400',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
    },
    gears: {
        flex: 1,
        width: '20%',
        padding: 5,
    },
});