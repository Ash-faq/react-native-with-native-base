import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
export default class ButtonTransparentExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button transparent light>
            <Text>Light</Text>
          </Button>
          <Button transparent>
            <Text>Primary</Text>
          </Button>
          <Button transparent success>
            <Text>Success</Text>
          </Button>
          <Button transparent info>
            <Text>Info</Text>
          </Button>
          <Button transparent warning>
            <Text>Warning</Text>
          </Button>
          <Button transparent danger>
            <Text>Danger</Text>
          </Button>
          <Button transparent dark>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}