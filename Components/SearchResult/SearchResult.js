import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { makeFriendRequestThunk } from '../../Thunks/FriendsThunks'
import LottieView from 'lottie-react-native'

export const SearchResult = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleFriendRequest = async (key, id) => {
    setIsLoading(true)
    await props.makeFriendRequest(key, id)
    setIsLoading(false)
    setSuccess(true)
  }
  return(
    <ScrollView>
      <View>
        <Text>Search Results</Text>
      </View>
      <View>
        <Text>{props.result.attributes.name}</Text>
        <Text>{props.result.attributes.email}</Text>
        <Text>{props.result.attributes.phone_number}</Text>
        <Button 
          title='Send Friend Request'
          onPress={() => handleFriendRequest(props.userKey, props.result.id)}
        />
      </View>
      {isLoading && (
          <LottieView
            ref={animation => {
              waveAnimation = animation;
            }}
            source={require("../../Animations/196-material-wave-loading.json")}
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
            source={require("../../Animations/4431-success.json")}
            ref={animation => {
              successAnimation = animation;
            }}
            autoPlay
            loop={false}
            style={{
              marginTop: 35
            }}
            onAnimationFinish={() => props.navigation.goBack()}
          />
        )}
    </ScrollView>
  )
}

const mapStateToProps = store => ({
  userKey: store.currentUser.attributes.api_key,
  result: store.searchResult
})

const mapDispatchToProps = dispatch => ({
  makeFriendRequest: (key, id) => dispatch(makeFriendRequestThunk(key, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)