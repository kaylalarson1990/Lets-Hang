import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { makeFriendRequestThunk } from '../../Thunks/FriendsThunks'

export const SearchResult = (props) => {
  console.log(props)
  return(
    <ScrollView>
      <View>
        <Text>Search Results</Text>
      </View>
      <View>
        <Text>{props.attributes.name}</Text>
        <Text>{props.attributes.email}</Text>
        <Text>{props.attributes.phone_number}</Text>
        <Button 
          title='Send Friend Request'

        />
      </View>
    </ScrollView>
  )
}

const mapStateToProps = store => ({
  userKey: store.currentUser.attributes.api_key
})

const mapDispatchToProps = dispatch => ({
  makeFriendRequest: (key, id) => dispatch(makeFriendRequestThunk(key, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)