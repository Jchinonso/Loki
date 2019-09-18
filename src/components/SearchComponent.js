import React, { Component } from "react";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Text,
  Card,
  CardItem
} from "native-base";
import { ListItem } from "react-native-elements";
import TouchableScale from 'react-native-touchable-scale'; 

import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";

import { getUsers } from "../actions/photoGalleryActions";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = value => {
    this.setState({
      searchTerm: value
    });
  };

  handlePressUser = user => {
    this.props.navigation.navigate('PreviewComponent', {user})
  }

  handlePress = e => {
    const { searchTerm } = this.state;
    this.props.getUsers(searchTerm);
  };
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Item rounded>
            <Input
              placeholder="Search for a user"
              onChangeText={this.handleChange}
            />
            <Button light rounded onPress={this.handlePress}>
              <Text style={{fontFamily: 'campton'}}> Click Me!</Text>
            </Button>
          </Item>
          <Card style={styles.card}>
            {this.props.users.map((item, index) => (
              <ListItem
                key={index}
                Component={TouchableScale}
                leftAvatar={{ source: { uri: item.profile_image.small } }}
                title={item.name}
                bottomDivider
                chevron
                onPress={() => this.handlePressUser(item)}
                friction={90} 
                titleStyle={{ fontFamily: 'campton', fontWeight: 'bold' }}
                tension={100} 
                chevron={{ color: 'white' }}
                showsVerticalScrollIndicator={false}
              />
            ))}
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 20
  },
  input: {
    fontFamily: "campton"
  },
  card: {
    marginTop: 30,
    backgroundColor: "#fafafa"
  }
});

const mapStateToProps = state => ({
  users: state.photoGalleryReducer.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(SearchComponent);
