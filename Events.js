import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Events = ({name}) => {
    // const [event, setEvent] = useState();
    return(
        <View>
            <Text>{name}</Text>
        </View>
    )
}