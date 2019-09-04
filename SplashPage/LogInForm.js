import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from 'react-native-elements'

export const LogInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <LoginForm>
    <Input 
      placeholder='Email'
      value={email}
      onChangeText={(email) => setEmail(email)}
    />
    <Input 
      placeholder='Password'
      value={password}
      onChangeText={(password) => setPassword(password)}
    />
  </LoginForm>
  )
}

const LoginForm = styled.View`
  height: 50%;
  width: 100%;
`
