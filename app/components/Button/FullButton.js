import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
export default class ButtonFullExample extends Component {
  render() {
    return (
      <Container>       
        <Content>
          <Button full light>
            <Text>Light</Text>
          </Button>
          <Button full>
            <Text>Primary</Text>
          </Button>
          <Button full success>
            <Text>Success</Text>
          </Button>
          <Button full info>
            <Text>Info</Text>
          </Button>
          <Button full warning>
            <Text>Warning</Text>
          </Button>
          <Button full danger>
            <Text>Danger</Text>
          </Button>
          <Button full dark>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}