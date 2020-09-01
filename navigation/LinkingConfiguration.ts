import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          List: {
            screens: {
              ListScreen: 'list',
            },
          },
          Cart: {
            screens: {
              CartScreen: 'cart',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
          Notification: {
            screens: {
              NotificationScreen: 'notification',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
