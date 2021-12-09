import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from '../components/Themed';

import Cart from '../components/cart/Cart';

export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Cart navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
