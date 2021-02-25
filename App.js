import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './Screens/BookTransactionScreen.js'
import SearchScreen from './Screens/SearchScreen.js'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    ); 
  }
  
}

const TabNavigator = createBottomTabNavigator ({
  Transaction:{screen: TransactionScreen},
  Search:{screen: SearchScreen},
})

const AppContainer = createAppContainer(TabNavigator)