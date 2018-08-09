import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onRadioButtonClick = () =>{
        Actions.basicRadioButton();
    }
    onCustomRadioButtonClick = () =>{
        Actions.customRadioButton();
    }  

  render() {
    return (
      <Container>        
        <Content>
          <List>
          <ListItem onPress={ this.onRadioButtonClick }>
              <Text >Basic Radio Button</Text>
            </ListItem>
            <ListItem onPress={ this.onCustomRadioButtonClick }>
              <Text >Custom Radio Button</Text>
            </ListItem>         
          </List>
        </Content>
      </Container>
    );
  }
}