import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class PreviewComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const user = this.props.navigation.state.params.user;
    // const images = user.photos.map(item => {
    //   return {
    //     source: {
    //       uri: item.urls.regular
    //     },
    //     title: "Paris",
    //     width: 806,
    //     height: 720
    //   };
    // });
    // console.log(images);
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{ uri: "Image URL" }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
