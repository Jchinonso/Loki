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
    return (
      <Container>
        <Content>
          <Card style={{marginLeft: 10, marginRight: 10}}>
            <CardItem cardBody>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
