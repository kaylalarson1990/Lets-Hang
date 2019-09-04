import React from 'react'
import { Button } from 'react-native-elements'

export const SubmitButton = ({setShowSplash}) => {
  return (
    <Button 
    title='Submit'
    containerStyle={{
      marginTop: 20
    }}
    onPress={() => setShowSplash(false)}
  />
  )
}