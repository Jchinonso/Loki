import React, { Component } from "react";
import { View, Text } from "react-native";
import ImageView from "react-native-image-view";

export default class PreviewComponent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
      const user = this.props.navigation.state.params.user;
      const images = user.photos.map(item => {return {
       source: {
           uri: item.urls.regular
       },
       title: 'Paris',
        width: 806,
        height: 720,
      }})
      console.log(images)
    return (
      <View>
        <Text> {this.props.navigation.state.params.name} </Text>
        <ImageView
          images={images}
          imageIndex={0}
        />
      </View>
    );
  }
}
