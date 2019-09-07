import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Events } from "./Components/Events/Events";
import { connect } from "react-redux";
import { getEventsThunk } from "./Thunks/EventThunks";
import styled from "styled-components";

const Home = props => {
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    const allEvents = await props.getEvents(props.user.attributes.api_key);
    console.log(allEvents)
    setEvents(allEvents.data);
  }, []);

  const allEvents = events.map(event => {
    return (
      <Events
        name={event.attributes.creator}
        title={event.attributes.title}
        time={event.attributes.event_time}
        address={event.attributes.event_location}
        description={event.attributes.description}
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
            <Name>Welcome, {props.user.attributes.first_name}!</Name>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Avatar source={require("./assets/main-user.png")} />
            </TouchableOpacity>
          </View>
        </Cover>
        <View style={styles.container}>{allEvents}</View>
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
  getEvents: event => dispatch(getEventsThunk(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
