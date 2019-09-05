import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { MockEvents, MockUser } from "./MockData";
import { Events } from "./Components/Events/Events";
import { connect } from "react-redux";
import { getEvents } from "./Actions/index";
import LottieView from "lottie-react-native";
import styled from "styled-components";
import SplashPage from "./SplashPage/SplashPage";
import { FriendList } from "./Components/FriendsList/FriendList";

const Home = props => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    props.getEvents(MockEvents.events);
    setEvents(MockEvents.events);
  }, []);

  const allEvents = events.map(event => {
    return (
      <Events
        title={event.title}
        time={event.time}
        address={event.address}
        description={event.description}
        key={event.id}
      />
    );
  });
  return (
    <>
      <ScrollView>
        <Cover>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Name>Welcome, Ryan!</Name>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Avatar source={require("./assets/main-user.png")} />
            </TouchableOpacity>
          </View>
        </Cover>
        <View style={styles.container}>{allEvents}</View>
        <LottieView
          source={require("./Animations/8868-three-points.json")}
          autoPlay
          loop
          speed={1}
          autoSize
        />
      </ScrollView>
    </>
  );
};

const Avatar = styled.Image`
  top: 10;
  left: 15;
  border-radius: 20px;
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

const Name = styled.Text`
  color: black;
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-right: 44px;
  text-align: center;
`;

const Cover = styled.View`
  width: 100%;
  height: 150px;
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

const mapStateToProps = store => ({
  events: store.events,
  user: store.currentUser
});

const mapDispatchToProps = dispatch => ({
  getEvents: event => dispatch(getEvents(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
