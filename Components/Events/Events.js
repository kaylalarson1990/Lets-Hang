import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { declineEventThunk, acceptEventThunk } from '../../Thunks/EventThunks'

export const Events = props => {
  const [accepted, setAccepted] = useState(false) 

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Text style={styles.eventsName}>{props.name}</Text>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.address}>{props.address}</Text>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={styles.description}>{props.description}</Text>
          {!accepted && <Button 
            title='Join This Hang!'
            onPress={() => props.acceptEvent(props.id, props.userKey)}
          />}
          {accepted && <Button 
            title='Leave Hang'
            onPress={() => props.declineEvent(props.id, props.userKey)}
          />}
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "5%",
    height: "100%"
  },
  button: {
    backgroundColor: "#4d8cff",
    width: "40%",
    height: 48,
    borderRadius: 35,
    marginTop: 15,
    marginBottom: 10,
    padding: 13
  },
  buttonDecline: {
    backgroundColor: "white",
    borderColor: "#4d8cff",
    width: "40%",
    height: 48,
    borderRadius: 35,
    marginTop: 15,
    marginBottom: 10,
    padding: 13
  },
  container: {
    width: "96%",
    minHeight: 300,
    borderRadius: 4,
    backgroundColor: "#fff",
    // boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
    elevation: 2
  },
  content: {
    flexDirection: "column",
    height: 50,
    paddingTop: 10
  },
  wrapper: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 24,
    marginRight: 24
  },
  time: {
    color: "#767676",
    fontSize: 20,
    textTransform: "uppercase",
    marginTop: 4
  },
  description: {
    color: "black",
    fontSize: 16,
    marginTop: 24
  },
  address: {
    color: "#767676",
    fontSize: 20,
    marginTop: 4
  },
  title: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 4
  },
  eventsName: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 4
  }
});

const mapStateToProps = store => ({
  userKey: store.currentUser.attributes.api_key
})

const mapDispatchToProps = dispatch => ({
  acceptEvent: (id, key) => dispatch(acceptEventThunk(id, key)),
  declineEvent: (id, key) => dispatch(declineEventThunk(id, key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Events)
