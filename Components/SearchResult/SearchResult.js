import React, { useState } from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { makeFriendRequestThunk } from "../../Thunks/FriendsThunks";
import LottieView from "lottie-react-native";

export const SearchResult = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFriendRequest = async (key, id) => {
    setIsLoading(true);
    await props.makeFriendRequest(key, id);
    setIsLoading(false);
    setSuccess(true);
  };
  return (
    <ScrollView>
      <View style={styles.searchResultCover}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Text style={styles.searchResults}>Search Results</Text>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon
              style={styles.avatar}
              size={48}
              name="close"
              color="#517fa4"
              type="ionicons"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#01d2c120", minHeight: "100%" }}>
        <View style={styles.searchContainer}>
          <Text style={styles.name}>{props.result.attributes.name}</Text>
          <Text style={styles.info}>{props.result.attributes.email}</Text>
          <Text style={styles.info}>
            {props.result.attributes.phone_number}
          </Text>
          <Button
            title="Send Friend Request"
            onPress={() => handleFriendRequest(props.userKey, props.result.id)}
            containerStyle={{
              width: 300,
              display: "flex",
              marginTop: 10,
              marginBottom: 10
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
        </View>
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
            marginTop: 110
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
            marginTop: 110
          }}
          onAnimationFinish={() => props.navigation.goBack()}
        />
      )}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  name: {
    color: "#011627",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center"
  },
  info: {
    fontSize: 17,
    color: "#767676"
  },
  searchResults: {
    color: "#011627",
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 44,
    textAlign: "center"
  },
  searchResultCover: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    paddingTop: 40,
    backgroundColor: "#01d2c120",
    display: "flex"
  },
  avatar: {
    top: 10,
    left: 15,
    borderRadius: 20,
    width: 48,
    height: 48,
    marginRight: 16
  },
  searchContainer: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
    borderRadius: 4,
    margin: 10,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
    elevation: 2
  }
});

const mapStateToProps = store => ({
  userKey: store.currentUser.attributes.api_key,
  result: store.searchResult
});

const mapDispatchToProps = dispatch => ({
  makeFriendRequest: (key, id) => dispatch(makeFriendRequestThunk(key, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);
