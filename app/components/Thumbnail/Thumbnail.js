import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Content>
          <Text>Square Thumbnail</Text>
          <Thumbnail square small source={{uri: uri}} />
          <Thumbnail square source={{uri: uri}} />
          <Thumbnail square large source={{uri: uri}} />
          <Text>Circular Thumbnail</Text>
          <Thumbnail small source={{uri: uri}} />
          <Thumbnail source={{uri: uri}} />
          <Thumbnail large source={{uri: uri}} />
        </Content>
      </Container>
    );
  }
}