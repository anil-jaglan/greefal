import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeNavigator from './HomeNavigator';
import CartScreen from '../screens/CartScreen';
import ListScreen from '../screens/ListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabParamList, ListParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const ListStack = createStackNavigator<ListParamList>();

function ListStackNavigator() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ headerTitle: 'List' }}
      />
    </ListStack.Navigator>
  );
}

const CartStack = createStackNavigator();

function CartStackNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: 'Cart' }}
      />
    </CartStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}
