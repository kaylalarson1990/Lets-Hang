import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AppRegistry, ScrollView } from "react-native";
import { MockEvents, MockUserEvents, MockUser } from "./MockData";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Events } from "./Events";
import { Ionicons } from "@expo/vector-icons";
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
        address={event.address}
        key={event.id}
      />
    );
  });
  return (
    <>
      <ScrollView>
        <Cover>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Avatar source={require("./assets/main-user.png")} />
            <Title>Let's Hang!</Title>
          </View>
          <Name>Welcome, {user.name}!</Name>
        </Cover>
        <View style={styles.container}>{allEvents}</View>
      </ScrollView>
    </>
  );
};

const activeTintLabelColor = "#4D8CFF";
const inactiveTintLabelColor = "#808080";

const tabNavigator = createBottomTabNavigator({
  TabHome: {
    screen: App,
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
      margin: 15
    }
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
  height: 190px;
  overflow: hidden;
  padding-top: 40px;
  background-color: #f7f7f7;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(tabNavigator);
