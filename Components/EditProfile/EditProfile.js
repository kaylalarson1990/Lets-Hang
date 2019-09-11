import React, { useState } from "react";
import {
  TextInput,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";
import { connect } from "react-redux";
import { Button, Icon } from "react-native-elements";
import { editUserThunk } from "../../Thunks/UserThunks";

export const EditProfile = props => {
  const [email, setEmail] = useState(props.user.attributes.email);
  const [firstName, setFirstName] = useState(props.user.attributes.first_name);
  const [lastName, setLastName] = useState(props.user.attributes.last_name);
  const [phoneNumber, setPhoneNumber] = useState(
    props.user.attributes.phone_number
  );

  const handleUpdateUser = async (id, key) => {
    const profile = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email
    };
    await props.editProfile(id, key, profile);
    props.navigation.goBack();
  };

  return (
    <>
      <ScrollView>
        <View style={styles.searchResultCover}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Text style={styles.searchResults}>Edit Profile</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon
                style={styles.profileAvatar}
                size={48}
                name="close"
                color="#517fa4"
                type="ionicons"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: "#01d2c120", display: "flex", alignItems: "center" }}>
          <View
            style={{
              minHeight: 800,
              width: 300
            }}
          >
            <Text style={styles.inputTags}>First name</Text>
            <TextInput
              placeholder={firstName}
              style={styles.textInputs}
              value={firstName}
              onChangeText={firstName => setFirstName(firstName)}
            />
            <Text style={styles.inputTags}>Last Name</Text>
            <TextInput
              placeholder={lastName}
              style={styles.textInputs}
              value={lastName}
              onChangeText={lastName => setLastName(lastName)}
            />
            <Text style={styles.inputTags}>Email</Text>
            <TextInput
              placeholder={email}
              style={styles.textInputs}
              value={email}
              onChangeText={email => setEmail(email)}
            />
            <Text style={styles.inputTags}>Phone Number</Text>
            <TextInput
              placeholder={phoneNumber}
              style={styles.textInputs}
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            />
            <Button
              title="Submit Changes"
              onPress={() =>
                handleUpdateUser(props.user.id, props.user.attributes.api_key)
              }
              style={{
                height: 40,
                width: 300
              }}
              buttonStyle={{
                backgroundColor: "#011627"
              }}
              titleStyle={{
                color: "#FDFFFC",
                fontSize: 20
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  searchResults: {
    color: "#011627",
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 44,
    textAlign: "center"
  },
  searchResultCover: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    paddingTop: 40,
    backgroundColor: "#01d2c120",
    display: "flex"
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
  textInputs: {
    borderColor: "gray",
    borderWidth: 1,
    height: 50,
    width: 300,
    backgroundColor: "white",
    marginBottom: 20,
    padding: 5,
    borderRadius: 2
  },
  inputTags: {
    color: "#333",
    fontSize: 16
  }
});

const mapStateToProps = store => ({
  user: store.currentUser
});

const mapDispatchToProps = dispatch => ({
  editProfile: (id, key, profile) => dispatch(editUserThunk(id, key, profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
