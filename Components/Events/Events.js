import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Events = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.eventsName}>Created by: {props.name}</Text>
          <Text style={styles.address}>{props.address}</Text>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={styles.description}>{props.description}</Text>
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
    backgroundColor: "#FFFFFF",
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
    fontSize: 28,
    fontWeight: '300',
    marginTop: 4,
    marginBottom: 10
  }
});
