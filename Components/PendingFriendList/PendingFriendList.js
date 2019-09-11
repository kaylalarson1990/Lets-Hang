import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import  PendingFriend  from "../PendingFriend/PendingFriend";

export const PendingFriendList = (props) => {
  const pendingFriends = props.friends.map(friend => {
    return <PendingFriend friend={friend} />;
  });

  console.log(props)

  return (
    <>
      <View style={styles.pendingFriendCover}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Text style={styles.pendingFriends}>Pending Friends</Text>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
          >
            <Image
              style={styles.avatar}
              source={require("../../assets/close.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#f7f7f7", minHeight: "100%" }}>
        {pendingFriends}
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  pendingFriends: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 84,
    textAlign: "center"
  },
  pendingFriendCover: {
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
  }
});

const mapStateToProps = store => ({
  friends: store.requested
});

export default connect(
  mapStateToProps,
  null
)(PendingFriendList);
