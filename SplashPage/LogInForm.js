import React, { useState } from "react";
import { Button } from "react-native-elements";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { loginUserThunk } from "../Thunks/UserThunks";
import { withNavigation } from "react-navigation";
import { ActionCable, Cable } from '@kesha-antonov/react-native-action-cable';
import { addActionCable, addCable } from '../Actions/index'
import Contacts from 'react-native-contacts'


export const LogInForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleUserLogin = async () => {
    const user = {
      email,
      password
    };
    setIsLoading(true);
    const response = await props.loginUser(user);
    setIsLoading(false);
    if (response === undefined) {
      setFailure(true);
    } else {
      setSuccess(true);

    }
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => props.setLogIn(false)}
        containerStyle={{
          position: "absolute",
          marginLeft: 0
        }}
      >
        <Image
          style={{ height: 30, width: 30, marginBottom: 50 }}
          source={require("../assets/back-btn.png")}
        />
      </TouchableOpacity>
      <View style={styles.loginForm}>
        <Text style={styles.inputTags}>Email</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={email => setEmail(email)}
          returnKeyType={"next"}
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
        />
        {!isLoading && !success && !failure && (
          <Button
            title="Submit"
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
            onPress={() => handleUserLogin()}
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
              marginTop: 35
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
            loop={false}
            style={{
              marginTop: 35
            }}
            onAnimationFinish={() => props.navigation.navigate("Home")}
          />
        )}
        {!isLoading && failure && (
          <LottieView
            source={require("../Animations/6952-fail.json")}
            autoPlay
            loop={false}
            speed={2}
            style={{
              marginTop: 35
            }}
            onAnimationFinish={() => setFailure(false)}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    height: "100%",
    width: 300
  },
  inputTags: {
    color: "#333",
    fontSize: 16
  },
  signup: {
    color: "#1F89DC",
    fontSize: 21,
    marginBottom: 50
  },
  textInputs: {
    borderColor: "gray",
    borderWidth: 1,
    height: 50,
    backgroundColor: "white",
    marginBottom: 20,
    padding: 5,
    borderRadius: 2
  }
});

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUserThunk(user)),
  addNewActionCable: actionCable => dispatch(addActionCable(actionCable)),
  addNewCable: cable => dispatch(addCable(cable))
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(LogInForm)
);
