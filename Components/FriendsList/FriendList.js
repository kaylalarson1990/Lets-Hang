import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FriendList = props => {
  return (
    <View style={styles.friendListContainer}>
      <View style={styles.friendListContent}>
        <View style={styles.friendListWrapper}>
          <Text style={styles.friendListName}>{props.name}</Text>
          <Text style={styles.phone}>{props.phone}</Text>
          <Text style={styles.email}>{props.email}</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  friendListContainer: {
    backgroundColor: "#fff",
    minHeight: 150,
    borderRadius: 4,
    margin: 10,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
    // box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    elevation: 2
  },
  friendListContent: {
    flexDirection: "column",
    height: 50,
    paddingTop: 10
  },
  friendListWrapper: {
    marginTop: 4,
    marginLeft: 24,
    marginBottom: 4,
    marginRight: 24
  },
  email: {
    color: "#767676",
    fontSize: 20,
    textTransform: "uppercase",
    marginTop: 4
  },
  phone: {
    color: "#767676",
    fontSize: 20,
    marginTop: 4
  },
  friendListName: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 4
  }
});
