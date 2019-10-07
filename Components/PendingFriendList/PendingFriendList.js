import React from "react";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import PendingFriend from "../PendingFriend/PendingFriend";

export const PendingFriendList = props => {
  const pendingFriends = props.friends.map(friend => {
    return <PendingFriend friend={friend} />;
  });
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
            onPress={() => props.navigation.navigate("FriendList")}
          >
            <Icon
              style={styles.avatar}
              size={48}
              name="close"
              color="#517fa4"
              type="ionicons"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ backgroundColor: "#01d2c120", minHeight: "100%" }}>
          {pendingFriends}
        </View>
      </ScrollView>
    </>
  );
};

export const styles = StyleSheet.create({
  pendingFriends: {
    color: "#011627",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 44,
    textAlign: "center"
  },
  pendingFriendCover: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    paddingTop: 40,
    backgroundColor: "#01d2c120"
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
