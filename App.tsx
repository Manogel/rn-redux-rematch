import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src/Home';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
