import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onBasicFooterClick = () =>{
        Actions.footerTab();
    }
    onIconFooterClick = () =>{
        Actions.iconFooter();
    }  
    onIconAndTextFooterClick = () =>{
      Actions.iconFooterText();
    }
    onFooterWithBadgeClick = () =>{
      Actions.footerbadge();
    }  

  render() {
    return (
      <Container>        
        <Content>
          <List>
          <ListItem onPress={ this.onBasicFooterClick }>
              <Text >Basic Footer Tabs</Text>
            </ListItem>
            <ListItem onPress={ this.onIconFooterClick }>
              <Text >Icon Footer</Text>
            </ListItem> 
            <ListItem onPress={ this.onIconAndTextFooterClick }>
              <Text >Icon Footer with Text</Text>
            </ListItem>
            <ListItem onPress={ this.onFooterWithBadgeClick }>
              <Text >Footer with badge</Text>
            </ListItem>         
          </List>
        </Content>
      </Container>
    );
  }
}