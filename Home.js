import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import { Icon } from "react-native-elements";
import Events from "./Components/Events/Events";
import { connect, useSelector } from "react-redux";
import { getEventsThunk } from "./Thunks/EventThunks";
import { getUserFriendsThunk } from "./Thunks/FriendsThunks";
import { FloatingAction } from "react-native-floating-action";
import CreateEvent from "./Components/CreateEvent/CreateEvent";

export const Home = props => {
  const [createEvent, setCreateEvent] = useState(false);
  const selectEvents = useSelector(state => state.events);

  useEffect(async () => {
    await props.getEvents(props.user.attributes.api_key);
    await props.getFriends(props.user.attributes.api_key);
  }, []);

  const allEvents = selectEvents.map(event => {
    return (
      <Events
        name={event.creator}
        title={event.title}
        time={event.event_time}
        address={event.event_location}
        description={event.description}
        id={event.id}
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
              <Icon style={styles.avatar} size={48} name="person" color='#517fa4' type="ionicons" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>{allEvents}</View>
        <TouchableOpacity></TouchableOpacity>
      </ScrollView>
      <FloatingAction
        onPressMain={value => setCreateEvent(value)}
        showBackground={false}
        color="#011627"
      />
    </>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    backgroundColor: "#01d2c120",
    alignItems: "center"
  },
  cover: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    paddingTop: 40,
    backgroundColor: "#01d2c120"
  },
  avatar: {
    top: 20,
    left: 15,
    borderRadius: 20,
    width: 55,
    height: 55,
    marginRight: 16
  },
  name: {
    color: "#011627",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 44,
    marginLeft: 19,
    textAlign: "center"
  }
});

export const mapStateToProps = store => ({
  events: store.events,
  user: store.currentUser,
  friends: store.friends
});

export const mapDispatchToProps = dispatch => ({
  getEvents: event => dispatch(getEventsThunk(event)),
  getFriends: key => dispatch(getUserFriendsThunk(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
