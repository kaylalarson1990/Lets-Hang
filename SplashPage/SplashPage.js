import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { LogInForm } from "./LogInForm";
import { SignUpForm } from "./SignUpForm";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";

export const SplashPage = ({setViewSplash}) => {
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
        <AppTitle>Let's Hang!</AppTitle>
        {!logIn && !signUp && (
          <Button
            title="Log In"
            onPress={() => setLogIn(true)}
            containerStyle={{
              width: "100%",
              display: "flex",
              marginTop: 10
            }}
            buttonStyle={{
              width: "100%"
            }}
            raised={true}
          />
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
              width: "100%"
            }}
            raised={true}
          />
        )}
        {logIn && <LogInForm setLogIn={setLogIn} setViewSplash={setViewSplash}/>}
        {signUp && <SignUpForm setSignUp={setSignUp} setViewSplash={setViewSplash}/>}
      </SplashContent>
    </SplashView>
  );
};

const SplashView = styled.View`
  width: 100%;
  background: #01d2c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AppTitle = styled.Text`
  font-size: 50px;
  color: yellow;
`;

const SplashContent = styled.View`
  z-index: 10;
  position: absolute;
`;
const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
