import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
 }
}

const TabNavigator=createBottomTabNavigator({
  fb:{screen:fb},
  search:{screen:inst}
})


const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
