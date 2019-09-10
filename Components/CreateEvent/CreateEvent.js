import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { createEventThunk } from "../../Thunks/EventThunks";

export const CreateEvent = props => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [error, setError] = useState(false);

  const handleCreateEvent = async () => {
    const event = {
      title: eventName,
      description: eventDescription,
      event_time: eventTime,
      event_location: eventLocation
    };
    const response = await props.createEvent(event, props.id);
    if (response) {
      props.setCreateEvent(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{ marginBottom: 20, fontSize: 32 }}>
          Create a new event!
        </Text>
        <Text style={styles.inputTags}>Event Name</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Event_Name"
          value={eventName}
          onChangeText={eventName => setEventName(eventName)}
          onSubmitEditing={() => {
            Description.focus();
          }}
          blurOnSubmit={false}
        />
        <Text style={styles.inputTags}>Event Description</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Description"
          value={eventDescription}
          onChangeText={eventDescription =>
            setEventDescription(eventDescription)
          }
          onSubmitEditing={() => {
            Location.focus();
          }}
          blurOnSubmit={false}
          ref={input => {
            Description = input;
          }}
        />
        <Text style={styles.inputTags}>Event Location</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Location"
          value={eventLocation}
          onChangeText={eventLocation => setEventLocation(eventLocation)}
          onSubmitEditing={() => {
            Time.focus();
          }}
          blurOnSubmit={false}
          ref={input => {
            Location = input;
          }}
        />
        <Text style={styles.inputTags}>Event Time</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Time"
          value={eventTime}
          onChangeText={eventTime => setEventTime(eventTime)}
          ref={input => {
            Time = input;
          }}
        />
        <Button
          style={{ marginTop: 30 }}
          title="Submit"
          onPress={() => handleCreateEvent()}
        ></Button>
        {error && <Text>Error creating an event</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 110,
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4
    // boxShadow: '0 10px 15px rgba(0, 0, 0, 0.15)'
  },
  input: {
    padding: 5,
    color: "#fff"
  },
  inputTags: {
    color: "#333",
    fontSize: 16
  },
  textInputs: {
    borderColor: "gray",
    borderWidth: 1,
    height: 50,
    backgroundColor: "white",
    marginBottom: 20,
    padding: 5,
    borderRadius: 2
  }
});

const mapStateToProps = store => ({
  key: store.currentUser.attributes.api_key
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event, key) => dispatch(createEventThunk(event, key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
