/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Books: {
            screens: {
              BooksScreen: 'books',
            },
          },
          Readers: {
            screens: {
              ReadersScreen: 'readers',
            },
          },
          Activity: {
            screens: {
              ReadersScreen: 'activity',
            },
          },
        },
      },
      Modal: 'modal',
      BookModal: 'modal',
      ActivityModal: 'modal',
      ReaderModal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
