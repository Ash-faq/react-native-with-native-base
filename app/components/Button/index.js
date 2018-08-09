import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onButtonThemeClick = () =>{
        Actions.buttonTheme();
    }
    onTransparentClick = () =>{
        Actions.transparentButton();
    }
    onOutlineButtonClick = () =>{
        Actions.outlineButton();
    }
    onRoundedButtonClick = () =>{
        Actions.roundedButton();
    }
    onBlockButtonClick = () =>{
        Actions.blockButton();
    }
    onFullButtonClick = () =>{
        Actions.fullButton();
    }
    onIconButtonClick = () =>{
        Actions.iconButton();
    }
    onButtonSizeClick = () =>{
        Actions.buttonSize();
    }
    onDisabledButtonClick = () =>{
        Actions.disabledButton();
    }

  render() {
    return (
      <Container>
        <Content>
          <List>
          <ListItem onPress={ this.onButtonThemeClick }>
              <Text >Button Theme</Text>
            </ListItem>
            <ListItem onPress={ this.onTransparentClick }>
              <Text >Transparent Button</Text>
            </ListItem>           
            <ListItem onPress={ this.onOutlineButtonClick }>
              <Text>Outline Button</Text>
            </ListItem>
            <ListItem onPress={ this.onRoundedButtonClick }>
              <Text>Rounded Button</Text>
            </ListItem>
            <ListItem onPress={ this.onBlockButtonClick }>
              <Text>Block Button</Text>
            </ListItem>
            <ListItem onPress={ this.onFullButtonClick }>
              <Text>Full Button</Text>
            </ListItem>
            <ListItem onPress={ this.onIconButtonClick }>
              <Text>Icon Button</Text>
            </ListItem>
            <ListItem onPress={ this.onButtonSizeClick }>
              <Text>Button Size</Text>
            </ListItem>
            <ListItem onPress={ this.onDisabledButtonClick }>
              <Text>Disabled Button</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}