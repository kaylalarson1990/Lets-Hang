import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Friends } from "../Friends/Friends";
import { FloatingAction } from 'react-native-floating-action'
import { withNavigation } from 'react-navigation'

export const FriendList = props => {
  const allFriends = props.friends.map(friend => {
    return (
      <Friends
        name={friend.name}
        phone={friend.phone_number}
        email={friend.email}
      />
    );
  });
  return (
    <>
    <ScrollView>
      <View style={styles.friendCover}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Text style={styles.friendName}>Friends List</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Image
              style={styles.avatar}
              source={require("../../assets/main-user.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#f7f7f7", minHeight: 675 }}>
        {allFriends}
      </View>
    </ScrollView>
      <FloatingAction 
        onPressMain={ () => props.navigation.navigate('PendingFriendList')}
        showBackground={false}
      />
    </>
  );
};

export const styles = StyleSheet.create({
  friendName: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 84,
    textAlign: "center"
  },
  avatar: {
    top: 10,
    left: 15,
    borderRadius: 20,
    width: 48,
    height: 48,
    marginRight: 16
  },
  friendAvatar: {
    top: 10,
    left: 15,
    borderRadius: 20,
    width: 48,
    height: 48,
    marginRight: 6
  },
  friendCover: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    paddingTop: 40,
    backgroundColor: "#f7f7f7"
  }
});

const mapStateToProps = store => ({
  friends: store.friends
});

export default withNavigation(connect(mapStateToProps)(FriendList));
