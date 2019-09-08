import React from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-elements";
import { connect } from "react-redux";
import {
  Headshot,
  ProfileAvatar
} from "../../StyledComponents/StyledComponents";

export const Profile = props => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <ProfileAvatar source={require("../../assets/close.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Headshot
            source={require("../../assets/profile-picture.png")}
            style={styles.imageContainer}
          >
            <View style={styles.overlay} />
            <Text
              style={{
                color: "white",
                fontSize: 36,
                marginTop: 250,
                marginLeft: 30,
                marginBottom: 10,
                fontWeight: 'bold'
              }}
            >
              {props.user.attributes.first_name}{" "}
              {props.user.attributes.last_name}
            </Text>
          </Headshot>
        </View>
        <Text
          style={{
            marginLeft: 30,
            fontSize: 17,
            marginBottom: 5,
            marginTop: 20,
            color: "#767676"
          }}
        >
          Email address
        </Text>
        <Text style={{ marginLeft: 30, fontSize: 22, marginBottom: 30 }}>
          {props.user.attributes.email}
        </Text>
        <Text
          style={{
            marginLeft: 30,
            fontSize: 17,
            marginBottom: 5,
            color: "#767676"
          }}
        >
          Phone number
        </Text>
        <Text style={{ marginLeft: 30, fontSize: 22 }}>
          {props.user.attributes.phone_number}
        </Text>
        <Button
          title="Edit Profile"
          style={{
            height: 40,
            margin: 30,
            marginTop: 200
          }}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(69,85,117,0.4)"
  }
});

export const mapStateToProps = store => ({
  events: store.events,
  user: store.currentUser
});

export default connect(mapStateToProps)(Profile);
