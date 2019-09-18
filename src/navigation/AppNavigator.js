import React from "react";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SearchComponent from '../components/SearchComponent';
import ListImageComponent from '../components/ListImageComponent';
import PreviewComponent from '../components/PreviewComponent'



const AppNavigator = createStackNavigator(
  {
    SearchComponent,
    ListImageComponent,
    PreviewComponent
  },
  { initialRouteName: 'ListImageComponent'}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
