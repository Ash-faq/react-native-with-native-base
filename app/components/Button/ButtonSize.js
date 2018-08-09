import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
export default class ButtonSizeExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          //Small size button
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
          //Regular size button
          <Button success>
            <Text>Success Default</Text>
          </Button>
          //Large size button
          <Button large dark>
            <Text>Dark Large</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}