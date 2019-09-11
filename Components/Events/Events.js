import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { declineEventThunk, acceptEventThunk } from "../../Thunks/EventThunks";

export const Events = props => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptEvent = async (id, key) => {
    await props.acceptEvent(id, key);
    setAccepted(true);
  };
  const handleDeclineEvent = async (id, key) => {
    await props.declineEvent(id, key);
    setAccepted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.eventsName}>Created by: {props.name}</Text>
          <Text style={styles.address}>{props.address}</Text>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={styles.description}>{props.description}</Text>
          {!accepted && (
            <Button
              title="Join This Hang!"
              onPress={() => handleAcceptEvent(props.id, props.userKey)}
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10
              }}
              buttonStyle={{
                backgroundColor: "#2EC4B6",
                width: '100%'
              }}
              titleStyle={{
                color: "#FDFFFC",
                fontSize: 20
              }}
            />
          )}
          <View style={{ display: "flex" }}>
            {accepted && (
              <Button
                title="Leave Hang"
                onPress={() => handleDeclineEvent(props.id, props.userKey)}
                style={{
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10
                }}
                buttonStyle={{
                  backgroundColor: "#FDFFFC",
                  width: '100%',
                  border: '#2EC4B6'
                }}
                titleStyle={{
                  color: "#2EC4B6",
                  fontSize: 20
                }}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: "96%",
    minHeight: 300,
    borderRadius: 4,
    backgroundColor: "#FDFFFC",
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
    color: "#011627",
    fontSize: 18,
    marginTop: 24
  },
  address: {
    color: "#767676",
    fontSize: 20,
    marginTop: 4
  },
  title: {
    color: "#011627",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 4
  },
  eventsName: {
    color: "#011627",
    fontSize: 24,
    fontWeight: "300",
    marginTop: 4,
    marginBottom: 10
  }
});

const mapStateToProps = store => ({
  userKey: store.currentUser.attributes.api_key
});

const mapDispatchToProps = dispatch => ({
  acceptEvent: (id, key) => dispatch(acceptEventThunk(id, key)),
  declineEvent: (id, key) => dispatch(declineEventThunk(id, key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
