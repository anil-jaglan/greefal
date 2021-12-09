import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Text, View } from '../Themed';

import Counter from '../counter/Counter';

export default function CartItem({ item, onItemUpdate }) {

    function onChange(count: any, type: string) {
        onItemUpdate && onItemUpdate(item, count);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/cart/apple.png')}
                />
            </View>
            <View style={styles.info}>
                <View style={styles.infoHeader}>
                    <View style={styles.title}>
                        <Text style={styles.titleTxt}>{item.name}</Text>
                    </View>
                    <View style={styles.qty}>
                        <Text style={styles.qtyTxt}>{item.qty}{' '}{item.unit}</Text>
                    </View>
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceTxt}>{item.currency}{item.price}{' / '}{item.unit}</Text>
                </View>
            </View>
            <View style={styles.gears}>
                <Counter
                    start={item.qty}
                    min={0}
                    max={50}
                    onChange={onChange}
                />
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
        width: '20%',
        padding: 5,
    },
    image: {
        width: 60,
        height: 60,
    },
    info: {
        flex: 1,
        width: '45%',
        padding: 5,
        alignItems: 'flex-start',
    },
    infoHeader: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        flex: 1,
        alignItems: 'flex-start'
    },    
    titleTxt: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 10,
    },
    qty: {
        flex: 1,
        paddingTop: 2,
    },
    qtyTxt: {
        fontSize: 12,
        fontWeight: '600',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingBottom: 10,
    },
    price: {
        flex: 1,
    },
    priceTxt: {
        fontSize: 12,
        fontWeight: '400',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
    },
    itemTotal: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
        color: '#ffffff',
        backgroundColor: '#758478',
        minWidth: 60,
        maxWidth: '100%',
    },
    gears: {
        alignItems: 'flex-end',
        width: '35%',
        padding: 5,
    },
});

CartItem.propTypes = {
    onItemUpdate: PropTypes.func,
} 