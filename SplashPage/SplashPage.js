import React, { useState } from "react";
import { connect } from "react-redux";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";
import {
  SplashView,
  AppTitle,
  SplashContent
} from "../StyledComponents/StyledComponents";

export const SplashPage = props => {
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

  return (
    <SplashView>
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
      <SplashContent>
        {!logIn && !signUp && (
          <>
            <AppTitle>Let's Hang!</AppTitle>
            <Button
              title="Log In"
              onPress={() => setLogIn(true)}
              containerStyle={{
                width: "100%",
                display: "flex",
                marginTop: 10
              }}
              buttonStyle={{
                width: 300
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
              marginTop: 10
            }}
            buttonStyle={{
              width: 300
            }}
            raised={true}
          />
        )}
        {logIn && <LogInForm setLogIn={setLogIn} />}
        {signUp && <SignUpForm setSignUp={setSignUp} />}
      </SplashContent>
    </SplashView>
  );
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
