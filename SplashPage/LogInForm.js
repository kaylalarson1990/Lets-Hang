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
      {!isLoading && <Button
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
        source={require('../Animations/3152-star-success.json')}
        ref={ animation => {
          successAnimation = animation
        }}
        autoPlay
        style={{
          margintop: 20
        }}
        onAnimationFinish={() => props.navigation.navigate('Home')}
      />}
      <TouchableOpacity
        onPress={() => props.setLogIn(false)}
        containerStyle={{
          position: "absolute",
          right: 175
        }}
      >
        <Text style={{ color: "#1F89DC", fontSize: 18, marginLeft: 20 }}>
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
