import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { rootReducer } from "./Reducers/index";
import Home from "./Home";
import { FriendsList } from './Components/FriendsList/FriendList'
import { createStackNavigator } from "react-navigation-stack";
import thunk from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const activeTintLabelColor = "#4D8CFF";
const inactiveTintLabelColor = "#808080";

const tabNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: (
        <Text
          style={{
            fontSize: 24,
            color: activeTintLabelColor,
            padding: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
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

const Navigation = createAppContainer(tabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
