import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Events } from "./Components/Events/Events";
import { connect } from "react-redux";
import { getEventsThunk } from "./Thunks/EventThunks";
import { Avatar, Name, Cover } from "./StyledComponents/StyledComponents";

export const Home = props => {
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    const allEvents = await props.getEvents(props.user.attributes.api_key);
    setEvents(allEvents.data.attributes.events);
  }, []);

  const allEvents = events.map(event => {
    return (
      <Events
        name={event.Creator}
        title={event.Title}
        time={event.Time}
        address={event.Location}
        description={event.Description}
        key={event.Time}
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
  }
});

export const mapStateToProps = store => ({
  events: store.events,
  user: store.currentUser
});

export const mapDispatchToProps = dispatch => ({
  getEvents: event => dispatch(getEventsThunk(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
