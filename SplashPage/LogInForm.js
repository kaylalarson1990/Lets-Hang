import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity, Text } from "react-native";
import LottieView from 'lottie-react-native'
import { connect } from 'react-redux'
import { loginUserThunk } from '../Thunks/UserThunks'
import { withNavigation } from 'react-navigation'

export const LogInForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading ] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  const handleUserLogin = async () => {
    const user = {
      email,
      password
    }
    setIsLoading(true)
    const response = await props.loginUser(user)
    setIsLoading(false)
    if(response.error) {
      setFailure(true)
    } else {
      setSuccess(true)
    }
  }
  return (
    <LoginForm>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />
      {!isLoading && !success && !failure && <Button
        title='Submit'      
        onPress={() => handleUserLogin()}
      >
      </Button>}
      {isLoading && <LottieView
        ref={ animation => {
          waveAnimation = animation
        }} 
        source={require('../Animations/196-material-wave-loading.json')}
        loop={true}
        speed={1}
        autoPlay
        style={{
          marginTop: 20
        }}
      />}
      {!isLoading && success && <LottieView 
        source={require('../Animations/4431-success.json')}
        ref={ animation => {
          successAnimation = animation
        }}
        autoPlay
        loop={false}
        style={{
          marginTop: 20
        }}
        onAnimationFinish={() => props.navigation.navigate('Home')}
      />}
      {!isLoading && failure && <LottieView 
        source={require('../Animations/6952-fail.json')}
        autoPlay
        loop={false}
        speed={2}
        style={{
          marginTop: 20
        }}
        onAnimationFinish={() => setFailure(false)}
      />}
      <TouchableOpacity
        onPress={() => props.setLogIn(false)}
        containerStyle={{
          marginTop: 10,
          position: "absolute",
          right: 155,
          top: 320
        }}
      >
        <Text style={{ color: "#1F89DC", fontSize: 18, marginTop: 100 }}>
          Back to Sign Up
        </Text>
      </TouchableOpacity>
    </LoginForm>
  );
};

const LoginForm = styled.View`
  height: 50%;
  width: 100%;
`;

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUserThunk(user))
})

export default withNavigation(connect(null, mapDispatchToProps)(LogInForm))
