import React, { useState } from "react";
import { connect } from "react-redux";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";
import { Text, View, StyleSheet } from "react-native";
import { PermissionsAndroid } from 'react-native'
import Contacts from 'react-native-contacts'

export const SplashPage = props => {
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

  return (
    <View style={styles.splashView}>
      <LottieView
        source={require("../Animations/animation-w414-h736.json")}
        loop={false}
        autoPlay
        speed={1}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
      <View style={styles.splashContent}>
        {!logIn && !signUp && (
          <>
            <Text style={styles.appTitle}>Let's Hang!</Text>
            <Button
              title="Log In"
              onPress={() => setLogIn(true)}
              containerStyle={{
                width: "100%",
                display: "flex",
                marginTop: 15
              }}
              buttonStyle={{
                width: 300,
                backgroundColor: "#011627"
              }}
              titleStyle={{
                color: "#FDFFFC",
                fontSize: 20
              }}
              raised={true}
            />
          </>
        )}
        {!logIn && !signUp && (
          <Button
            title="Sign Up"
            onPress={() => setSignUp(true)}
            containerStyle={{
              width: "100%",
              display: "flex",
              marginTop: 15
            }}
            buttonStyle={{
              width: 300,
              backgroundColor: "#011627"
            }}
            titleStyle={{
              color: "#FDFFFC",
              fontSize: 20
            }}
            raised={true}
          />
        )}
        {logIn && <LogInForm setLogIn={setLogIn} />}
        {signUp && <SignUpForm setSignUp={setSignUp} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashView: {
    width: "100%",
    backgroundColor: "#01d2c1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  appTitle: {
    fontSize: 54,
    color: "#011627",
    textAlign: "center",
    marginBottom: 70,
    position: "relative"
  },
  splashContent: {
    zIndex: 10,
    position: "absolute"
  }
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
