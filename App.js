import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { rootReducer } from "./Reducers/index";
import { Profile } from "./Components/Profile/Profile";
import Home from "./Home";
import { FriendList } from "./Components/FriendsList/FriendList";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { SplashPage } from "./SplashPage/SplashPage";
import LogInForm from "./SplashPage/LogInForm";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const activeTintLabelColor = "#4D8CFF";
const inactiveTintLabelColor = "#808080";

const tabNavigator = createBottomTabNavigator({
  Home: Home,
  Friends: FriendList
});

const rootStack = createStackNavigator(
  {
    Login: {
      screen: SplashPage
    },
    Home: {
      screen: tabNavigator,
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
        header: null
      }
    },
    Profile: {
      screen: Profile
      // navigationOptions: {
      //   tabBarLabel: (
      //     <Text
      //       style={{
      //         fontSize: 24,
      //         color: activeTintLabelColor,
      //         padding: 15,
      //         flexDirection: "row",
      //         alignItems: "center",
      //         justifyContent: "center"
      //       }}
      //     >
      //       Home
      //     </Text>
      //   ),
      //   padding: 15,
      //   margin: 15,
      //   header: null
      // }
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const Navigation = createAppContainer(rootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
