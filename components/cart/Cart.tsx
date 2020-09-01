import * as React from 'react';
import { FlatList, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, View } from '../Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import CartItem from './CartItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

const colorScheme = useColorScheme();

export default class Cart extends React.Component {

    constructor(props: any) {
        super(props);
    }
    state = {
        items: [],
        cartTotal: 0,
    }

    componentDidMount() {
        const _items = require('./items.json').items;
        this.setState({ items: _items, cartTotal: this.calcualateTotal(_items) });
    }
    calcualateTotal(items: any[]) {
        return items.map(item => { return item.price * item.qty }).reduce((a, p) => a + p, 0);
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.itemContainer}>
                    <FlatList
                        key='cartList'
                        style={styles.list}
                        data={this.state.items}
                        renderItem={({ item }) => <CartItem item={item} />}
                        keyExtractor={item => item.id} />
                </View>
                <View style={styles.totalContainer}>
                    <View style={styles.labelContainer}><Text style={styles.totalLabel}>Total: {this.state.cartTotal}</Text></View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={()=>Alert.alert('Checking out')}>
                            <Text style={styles.btn}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    list: {

    },
    totalContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    labelContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '50%',
        paddingLeft: 20,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
        textAlignVertical: 'center',
    },
    btnContainer: {
        flex: 1,
        alignItems: 'flex-end',
        width: '50%',
        paddingRight: 10,
    },
    btn: {
        backgroundColor: Colors[colorScheme].tint,
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '600',
    },
});