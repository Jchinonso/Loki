import React from "react";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SearchComponent from '../components/SearchComponent';
import PreviewComponent from '../components/PreviewComponent'



const AppNavigator = createStackNavigator(
  {
    SearchComponent,
    PreviewComponent
  },
  { initialRouteName: 'SearchComponent'}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
