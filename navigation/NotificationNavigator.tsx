import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

export default function NotificationNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notifications" component={NotificationScreen} />
        </Stack.Navigator>
    );
}