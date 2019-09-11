import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground
} from "react-native";
import { Button, TextInput } from "react-native-elements";
import { connect } from "react-redux";

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
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              style={styles.profileAvatar}
              source={require("../../assets/close.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/profile-picture.png")}
            style={styles.headShot}
          >
            <TouchableOpacity onPress={() => getPhotosFromGallery()}>
              <Image
                style={styles.edit}
                source={require("../../assets/edit.png")}
              />
            </TouchableOpacity>
            <View style={styles.overlay} />
            <Text
              style={{
                color: "white",
                fontSize: 36,
                marginTop: 250,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 10,
                fontWeight: "bold"
              }}
            >
              {props.user.attributes.first_name}{" "}
              {props.user.attributes.last_name}
            </Text>
          </ImageBackground>
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
        <View style={{ display: "flex" }}>
          <Button
            title="Edit Profile"
            style={{
              height: 40,
              marginTop: 150,
              justifyContent: "center",
              alignItems: "center"
            }}
            buttonStyle={{
              width: 300,
              backgroundColor: "#011627"
            }}
            titleStyle={{
              color: "#FDFFFC",
              fontSize: 20
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    display: "flex",
    justifyContent: "space-between"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(69,85,117,0.4)"
  },
  headShot: {
    width: "100%",
    height: 300,
    display: "flex",
    flex: 1,
    width: null,
    height: null
  },
  profileAvatar: {
    top: 10,
    borderRadius: 20,
    width: 48,
    height: 48,
    marginTop: 50,
    marginRight: 10,
    marginBottom: 20
  },
  edit: {
    width: 40,
    height: 40,
    marginLeft: 360,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: "rgba(69,85,117,0.2)"
  }
});

export const mapStateToProps = store => ({
  events: store.events,
  user: store.currentUser
});

export default connect(mapStateToProps)(Profile);
