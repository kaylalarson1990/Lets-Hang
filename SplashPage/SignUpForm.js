import React, { useState } from "react";
import { Button } from "react-native-elements";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image
} from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { addNewUserThunk } from "../Thunks/UserThunks";
import { withNavigation } from "react-navigation";

export const SignUpForm = ({ setSignUp, navigation, addNewUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const checkUserSignUp = async () => {
    const user = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email,
      password,
      password_confirmation: confirmPassword
    };
    setIsLoading(true);
    const response = await addNewUser(user);
    setIsLoading(false);
    if (response.error) {
      setFailure(true);
    } else {
      setSuccess(true);
    }
    return response;
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setSignUp(false)}
        containerStyle={{
          position: "absolute"
        }}
      >
        <Image
          style={{ height: 30, width: 30, marginBottom: 50 }}
          source={require("../assets/back-btn.png")}
        />
      </TouchableOpacity>
      <View style={styles.signUpForm}>
        <Text style={styles.inputTags}>First Name</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="First_Name"
          value={firstName}
          onChangeText={firstName => setFirstName(firstName)}
          onSubmitEditing={() => {
            Last_Name.focus();
          }}
          blurOnSubmit={false}
        />
        <Text style={styles.inputTags}>Last Name</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Last_Name"
          value={lastName}
          onChangeText={lastName => setLastName(lastName)}
          ref={input => {
            Last_Name = input;
          }}
          onSubmitEditing={() => {
            Email.focus();
          }}
          blurOnSubmit={false}
        />
        <Text style={styles.inputTags}>Email</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={email => setEmail(email)}
          ref={input => {
            Email = input;
          }}
          onSubmitEditing={() => {
            Password.focus();
          }}
          blurOnSubmit={false}
        />
        <Text style={styles.inputTags}>Password</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={password => setPassword(password)}
          ref={input => {
            Password = input;
          }}
          onSubmitEditing={() => {
            Confirm_Password.focus();
          }}
          blurOnSubmit={false}
        />
        <Text style={styles.inputTags}>Confirm Password</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Confirm_Password"
          value={confirmPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          ref={input => {
            Confirm_Password = input;
          }}
          onSubmitEditing={() => {
            Phone_Number.focus();
          }}
          blurOnSubmit={false}
        />
        <Text style={styles.inputTags}>Phone Number</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Phone_Number"
          value={phoneNumber}
          keyboardType="numeric"
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          ref={input => {
            Phone_Number = input;
          }}
        />
        {!isLoading && !success && !failure && (
          <Button
            title="Submit"
            onPress={() => checkUserSignUp()}
            style={{
              height: 40
            }}
            buttonStyle={{
              backgroundColor: "#011627"
            }}
            titleStyle={{
              color: "#FDFFFC",
              fontSize: 20
            }}
            raised={true}
          ></Button>
        )}
        {isLoading && (
          <LottieView
            ref={animation => {
              waveAnimation = animation;
            }}
            source={require("../Animations/196-material-wave-loading.json")}
            loop={true}
            speed={1}
            autoPlay
            style={{
              marginTop: 125
            }}
          />
        )}
        {!isLoading && success && (
          <LottieView
            source={require("../Animations/4431-success.json")}
            ref={animation => {
              successAnimation = animation;
            }}
            autoPlay
            style={{
              marginTop: 125
            }}
            loop={false}
            onAnimationFinish={() => navigation.navigate("Home")}
          />
        )}
        {!isLoading && failure && (
          <LottieView
            source={require("../Animations/6952-fail.json")}
            autoPlay
            loop={false}
            speed={2}
            style={{
              marginTop: 125
            }}
            onAnimationFinish={() => setFailure(false)}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  signUpForm: {
    height: "100%",
    width: 300
  },
  textInputs: {
    borderColor: "gray",
    borderWidth: 1,
    height: 50,
    backgroundColor: "white",
    marginBottom: 20,
    padding: 5,
    borderRadius: 2
  },
  login: {
    color: "#1F89DC",
    fontSize: 21,
    marginBottom: 50
  },
  inputTags: {
    color: "#333",
    fontSize: 16
  }
});

const mapDispatchToProps = dispatch => ({
  addNewUser: user => dispatch(addNewUserThunk(user))
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(SignUpForm)
);
