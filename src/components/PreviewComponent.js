import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import ImageView from "react-native-image-view";
import { Card, CardItem, Text } from "native-base";
export default class PreviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.user.name
    };
  };
  render() {
    const user = this.props.navigation.state.params.user;
    const singleImageList = user.photos.map(item => item.urls.regular);
    const images = user.photos.map(item => {
      return {
        source: {
          uri: item.urls.regular
        },
        title: "Paris",
        width: 806,
        height: 720
      };
    });
    const { clicked } = this.state;
    return (
      <View>
        <ScrollView>
          {singleImageList.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={e =>
                this.setState({
                  clicked: true
                })
              }
            >
              <Card style={{ marginLeft: 10, marginRight: 10 }}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri: item
                    }}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {this.state.clicked ? (
          <ImageView
            onClose={() =>
              this.setState({
                clicked: false
              })
            }
            images={images}
            imageIndex={0}
          />
        ) : null}
      </View>
    );
  }
}
