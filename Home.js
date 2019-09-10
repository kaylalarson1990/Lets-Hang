import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import { Events } from "./Components/Events/Events";
import { connect } from "react-redux";
import { getEventsThunk } from "./Thunks/EventThunks";
import { getUserFriendsThunk } from './Thunks/FriendsThunks'

export const Home = props => {
  const [events, setEvents] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(async () => {
    const allEvents = await props.getEvents(props.user.attributes.api_key);
    setEvents(allEvents.data.attributes.events);
    const allFriends = await props.getFriends(props.user.attributes.api_key);
    console.log(allFriends)
    setFriends(allFriends.data.attributes.friends)
  }, []);

  const allEvents = events.map(event => {
    return (
      <Events
        name={event.creator}
        title={event.title}
        time={event.event_time}
        address={event.event_location}
        description={event.description}
        key={event.event_time}
      />
    );
  });
  return (
    <>
      <ScrollView>
        <View style={styles.cover}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Text style={styles.name}>
              Welcome, {props.user.attributes.first_name}!
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Image
                style={styles.avatar}
                source={require("./assets/main-user.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>{allEvents}</View>
        <TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center"
  },
  cover: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    paddingTop: 40,
    backgroundColor: "#f7f7f7"
  },
  avatar: {
    top: 10,
    left: 15,
    borderRadius: 20,
    width: 48,
    height: 48,
    marginRight: 16
  },
  name: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 44,
    textAlign: "center"
  }
});

export const mapStateToProps = store => ({
  events: store.events,
  user: store.currentUser
});

export const mapDispatchToProps = dispatch => ({
  getEvents: event => dispatch(getEventsThunk(event)),
  getFriends: key => dispatch(getUserFriendsThunk(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
