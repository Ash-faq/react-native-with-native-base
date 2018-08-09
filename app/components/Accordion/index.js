import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onIconClick = () =>{
        Actions.accordionIcon();
    }
    onIconStyleClick = () =>{
        Actions.accordionIconStyle();
    }
    onHeaderContentClick = () =>{
        Actions.accordionHeaderContent();
    }
    onCustomHeaderContentClick = () =>{
        Actions.accordionCustomHeaderContent();
    }

  render() {
    return (
      <Container>       
        <Content>
          <List>
          <ListItem onPress={ this.onIconClick }>
              <Text >Icon and Expanded Icon</Text>
            </ListItem>
            <ListItem onPress={ this.onIconStyleClick }>
              <Text >Icon and Expanded Icon Style</Text>
            </ListItem>           
            <ListItem onPress={ this.onHeaderContentClick }>
              <Text>Header and Content Style</Text>
            </ListItem>
            <ListItem onPress={ this.onCustomHeaderContentClick }>
              <Text>Custom Header and Content</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}