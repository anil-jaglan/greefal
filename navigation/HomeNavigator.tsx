import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const colorScheme = useColorScheme();

const HomeStack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    const navigation = useNavigation();
    const color = Colors[colorScheme].tint;
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerTitle: 'Greefal',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => {navigation.navigate('Notification')}}>
                            <Ionicons size={30} style={{ marginRight: 15 }} name="ios-notifications-outline" color={color} />
                        </TouchableOpacity>
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
}