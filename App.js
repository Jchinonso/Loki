import React from "react";
import { Provider } from "react-redux";
import {  AppLoading } from "expo";
import * as Font from "expo-font"
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import AppContainer from "./src/navigation/AppNavigator";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      mono: require("./assets/fonts/SpaceMono-Regular.ttf"),
      campton: require("./assets/fonts/Campton.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
