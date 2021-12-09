import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

export default function CheckoutNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
    );
}