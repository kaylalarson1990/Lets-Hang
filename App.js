import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './Reducers/index'
import Home from './Home'
import SplashPage from './SplashPage/SplashPage'

const store = createStore(rootReducer)

const activeTintLabelColor = "#4D8CFF";
// const inactiveTintLabelColor = "#808080";

const tabNavigator = createStackNavigator({
  TabHome: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: (
        <Text
          style={{
            fontSize: 24,
            color: activeTintLabelColor,
            padding: 15,
            textAlign: "center"
          }}
        >
          Home
        </Text>
      ),
      padding: 15,
      margin: 15,
      header: null,
    },
  }
});

const Navigation = createAppContainer(tabNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

