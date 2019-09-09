import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { loginUserThunk } from "../Thunks/UserThunks";
import { withNavigation } from "react-navigation";

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
          right: 175
        }}
      >
        <Text
          style={{
            color: "#1F89DC",
            fontSize: 18,
            marginLeft: 10,
            marginBottom: 150
          }}
        >
          Back to Sign Up
        </Text>
      </TouchableOpacity>
      <View style={styles.loginForm}>
        <Input
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={email => setEmail(email)}
        />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={password => setPassword(password)}
        />
        {!isLoading && !success && !failure && (
          <Button
            title="Submit"
            style={{
              height: 50,
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 10
            }}
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
  }
});

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUserThunk(user))
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(LogInForm)
);
