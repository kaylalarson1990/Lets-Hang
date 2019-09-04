import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { rootReducer } from "./Reducers/index";
import Home from "./Home";
import Friends from "./Friends";

const store = createStore(rootReducer, composeWithDevTools());

const activeTintLabelColor = "#4D8CFF";
const inactiveTintLabelColor = "#808080";

const tabNavigator = createBottomTabNavigator({
  TabHome: {
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
      )
    }
  },
  TabFriends: {
    screen: Friends,
    navigationOptions: {
      tabBarLabel: (
        <Text
          style={{
            fontSize: 24,
            color: inactiveTintLabelColor,
            padding: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Friends
        </Text>
      )
    }
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
