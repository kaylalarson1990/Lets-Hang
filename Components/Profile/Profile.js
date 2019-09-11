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
import { Button } from "react-native-elements";
import { connect } from "react-redux";

export const Profile = props => {
  return (
    <>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/sunset.png')}
          style={{
            height: '100%',
            width: '100%'
          }}
        >
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
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                >
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../assets/back-50.png")}
                  />
                </TouchableOpacity>
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
            onPress={() => props.navigation.navigate('EditProfile')}
            style={{
              height: 40,
              marginTop: 150,
              justifyContent: "center",
              alignItems: "center"
            }}
            buttonStyle={{
              width: 350,
              backgroundColor: "#2EC4B6"
            }}
            titleStyle={{
              color: "#FDFFFC",
              fontSize: 20
            }}
            />
        </View>
        </ImageBackground>
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
    display: "flex",
    flex: 1,
    width: null,
    height: null
  },
  profileAvatar: {
    borderRadius: 25,
    width: 48,
    height: 48,
    marginRight: 10,
    marginBottom: 5,
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
