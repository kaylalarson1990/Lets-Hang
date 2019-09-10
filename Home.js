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
import { connect, useSelector } from "react-redux";
import { getEventsThunk } from "./Thunks/EventThunks";
import {
  getUserFriendsThunk,
  getPendingFriendsThunk,
  getRequestedFriendsThunk
} from "./Thunks/FriendsThunks";
import { FloatingAction } from "react-native-floating-action";
import CreateEvent from "./Components/CreateEvent/CreateEvent";

export const Home = props => {
  const [createEvent, setCreateEvent] = useState(false);
  const selectEvents = useSelector(state => state.events);

  useEffect(async () => {
    await props.getEvents(props.user.attributes.api_key);
    await props.getFriends(props.user.attributes.api_key);
    await props.getPendingFriends(props.user.attributes.api_key);
    await props.getRequestedFriends(props.user.attributes.api_key);
  }, []);

  const allEvents = selectEvents.map(event => {
    return (
      <Events
        name={event.creator}
        title={event.title}
        time={event.event_time}
        address={event.event_location}
        description={event.description}
        key={event.id}
      />
    );
  });
  return (
    <>
      <ScrollView>
        {createEvent && (
          <CreateEvent
            setCreateEvent={setCreateEvent}
            id={props.user.attributes.api_key}
          />
        )}
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
        <TouchableOpacity></TouchableOpacity>
      </ScrollView>
      <FloatingAction
        onPressMain={value => setCreateEvent(value)}
        showBackground={false}
      />
    </>
  );
};

export const styles = StyleSheet.create({
  opacity: {
    width: "100%",
    height: 900
  },
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
  user: store.currentUser,
  pending: store.pending,
  requested: store.requested
});

export const mapDispatchToProps = dispatch => ({
  getEvents: event => dispatch(getEventsThunk(event)),
  getFriends: key => dispatch(getUserFriendsThunk(key)),
  getPendingFriends: key => dispatch(getPendingFriendsThunk(key)),
  getRequestedFriends: key => dispatch(getRequestedFriendsThunk(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
