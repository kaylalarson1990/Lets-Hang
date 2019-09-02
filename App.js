import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AppRegistry, ScrollView } from "react-native";
import { MockEvents, MockUserEvents, MockUser } from "./MockData";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Events } from "./Events";
import styled from "styled-components";

App = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    setEvents(MockEvents.events);
    setUser(MockUser);
  }, []);

  const allEvents = events.map(event => {
    return (
      <Events
        name={event.name}
        title={event.title}
        time={event.time}
        key={event.id}
      />
    );
  });
  console.log(allEvents);
  return (
    <>
      <Cover>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Avatar source={require("./assets/avatar.png")} />
          <Title>Let's Hang!</Title>
        </View>
        <Name>Welcome, {user.name}!</Name>
      </Cover>
      <ScrollView>
        <View style={styles.container}>{allEvents}</View>
      </ScrollView>
    </>
  );
};

// const homeStack = createStackNavigator({
//   Home: {
//     screen: App
//   }
// });

const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: App
  }
});

const Title = styled.Text`
  font-size: 50px;
  color: black;
  margin-left: 50px;
  align-items: center;
`;

const Avatar = styled.Image`
  top: 15;
  left: 15;
  border-radius: 20px;
  width: 50px;
  height: 50px;
`;

const Name = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const Cover = styled.View`
  width: 100%;
  height: 170px;
  overflow: hidden;
  padding-top: 40px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(tabNavigator);
