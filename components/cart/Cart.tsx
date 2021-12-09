import * as React from 'react';
import { FlatList, StyleSheet, ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Text, View } from '../Themed';

import CartItem from './CartItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cart extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            cartTotal: 0,            
        }
        this.onItemUpdate = this.onItemUpdate.bind(this);
    }
    onItemUpdate(item: any, count: number) {
        this.updateQuantity(item, count);
        if (count == 0) {
            this.confirmDelete(item);
        }
    }
    confirmDelete(item: any) {
        Alert.alert(`Removing ${item.name}`, `Do you wanna remove it from your Cart?`,
            [
                {
                    text: "Keep it in Cart",
                    onPress: () => this.updateQuantity(item, 1)
                }, {
                    text: "Remove",
                    onPress: () => this.removeItem(item)
                },
            ]);
    }
    updateQuantity(item: any, count: number) {
        const items = this.state.items.map(itm => {
            if (itm.id == item.id) {
                itm.qty = count;
            }
            return itm;
        });
        this.setState({ items: items, cartTotal: this.calculateTotal(items) });
    }
    removeItem(item: any) {
        const items = this.state.items.filter((itm) => itm.id != item.id);
        this.setState({ items: items, cartTotal: this.calculateTotal(items) });
    }
    componentDidMount() {
        this.refreshCart();
    }
    calculateTotal(items: any[]) {
        return items.map(item => { return item.price * item.qty }).reduce((a, p) => a + p, 0);
    }
    refreshCart() {
        const _items = require('./items.json').items;
        this.setState({ items: _items, cartTotal: this.calculateTotal(_items) });
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.itemContainer}>
                    <FlatList
                        key='cartList'
                        style={styles.list}
                        data={this.state.items}
                        renderItem={({ item }) => <CartItem item={item} onItemUpdate={this.onItemUpdate} />}
                        keyExtractor={item => item.id} />
                </View>
                <View style={styles.totalContainer}>
                    <View style={styles.labelContainer}><Text style={styles.totalLabel}>Total:</Text></View>
                    <View style={styles.priceContainer}><Text style={styles.priceLabel}>{this.state.cartTotal}</Text></View>
                </View>
                <View style={styles.checkout}>
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                        <Text style={styles.btn}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        paddingBottom: 20,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 10,
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
    checkout: {
        flex: 1,
        width: '100%',
        alignContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    priceContainer: {
        flex: 1,
        alignItems: 'flex-end',
        width: '50%',
        paddingRight: 30,
    },
    priceLabel: {        
        fontSize: 16,
        fontWeight: '600',
    },
    btn: {
        textAlign: 'center',
        backgroundColor: '#0d8922',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '600',
    },
});

Cart.propTypes = {
    navigation: PropTypes.object,
}