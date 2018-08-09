import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon } from 'native-base';
export default class ButtonDisabledExample extends Component {
  render() {
    return (
      <Container>      
        <Content>
          <Button disabled>
              <Text>Default</Text>
            </Button>
            <Button disabled bordered>
              <Text>Outline</Text>
            </Button>
            <Button disabled rounded>
              <Text>Rounded</Text>
            </Button>
            <Button disabled large>
              <Text>Custom</Text>
            </Button>
            <Button disabled iconRight>
              <Text>Icon Button</Text>
              <Icon name="home" />
            </Button>
            <Button disabled block>
              <Text>Block</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}