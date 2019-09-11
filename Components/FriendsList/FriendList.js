import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import React, { useState } from "react";
import { Friends } from "../Friends/Friends";
import { withNavigation } from "react-navigation";
import { searchForFriendThunk } from '../../Thunks/FriendsThunks'

export const FriendList = props => {
  const [searchUser, setSearchUser] = useState("");

  const handleSearchForFriend = async (key, name) => {
    await props.searchForFriend(props.userKey, searchUser)
    props.navigation.navigate('SearchResult')
  }

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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
            backgroundColor: "#f7f7f7"
          }}
        >
          <TextInput
            placeholder="Add friends"
            value={searchUser}
            style={styles.textInputs}
            onChangeText={searchUser => setSearchUser(searchUser)}
          />
          <Icon 
            style={{ height: 30, width: 30}} 
            name="search" 
            type="font-awesome" 
            onPress={() => handleSearchForFriend(props.userKey, searchUser)}
            />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f7f7f7"
          }}
        >
          <TouchableOpacity>
            <Button
              title="View Pending Friends"
              onPress={() => props.navigation.navigate("PendingFriendList")}
              containerStyle={{
                //width: "100%",
                display: "flex",
                marginTop: 10,
                marginBottom: 10
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "FDFFFC"
              }}
              titleStyle={{
                color: "#2EC4B6",
                fontSize: 20
              }}
              raised={true}
            />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#f7f7f7", minHeight: "100%" }}>
          {allFriends}
        </View>
      </ScrollView>
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
  },
  textInputs: {
    borderColor: "gray",
    borderWidth: 1,
    height: 50,
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 10,
    width: 300,
    padding: 5,
    borderRadius: 30
  }
});

const mapStateToProps = store => ({
  friends: store.friends,
  userKey: store.currentUser.attributes.api_key
});

const mapDispatchToProps = dispatch => ({
  searchForFriend: (key, name) => dispatch(searchForFriendThunk(key, name))
})
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(FriendList));
