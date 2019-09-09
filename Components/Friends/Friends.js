import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { MockFriends } from "../../MockData";
import { getFriends } from "../../Actions/index";
import { FriendList } from "./FriendList";


const Friends = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    props.getFriends(MockFriends.friends);
    setFriends(MockFriends.friends);
  }, []);

  const allFriends = friends.map(friend => {
    return (
      <FriendList
        name={friend.name}
        phone={friend.phone}
        email={friend.email}
      />
    );
  });
  return (
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
          <Image
            style={styles.friendAvatar}
            source={require("./assets/main-user.png")}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "#f7f7f7", minHeight: 600 }}>
        {allFriends}
      </View>
    </ScrollView>
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

const mapDispatchToProps = dispatch => ({
  getFriends: friend => dispatch(getFriends(friend))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
