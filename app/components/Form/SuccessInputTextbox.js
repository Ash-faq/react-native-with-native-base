import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon } from 'native-base';
export default class SuccessInputTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Item success>
            <Input placeholder='Textbox with Success Input'/>
            <Icon name='checkmark-circle' />
          </Item>
        </Content>
      </Container>
    );
  }
}