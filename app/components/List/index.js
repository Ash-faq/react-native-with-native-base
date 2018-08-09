import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onBasicListClick = () =>{
        Actions.basicList();
    }
    onListDividerClick = () =>{
        Actions.listDivider();
    }  
    onListHeaderClick = () =>{
      Actions.listHeader();
    }
    onListItemSelectedClick = () =>{
        Actions.listItemSelected();
    }  
    onListItemNoIndentClick = () =>{
      Actions.listItemNoIndent();
    }
    onListIconClick = () =>{
        Actions.listIcon();
    }  
    onListAvatarClick = () =>{
      Actions.listAvatar();
    }
    onListThumbnailClick = () =>{
      Actions.listThumbnail();
    }  
    onDynamicListClick = () =>{
      Actions.dynamicList();
    }
    onListSeparatorClick = () =>{
      Actions.listSeparator();
    }  

  render() {
    return (
      <Container>        
        <Content>
          <List>
          <ListItem onPress={ this.onBasicListClick }>
              <Text >Basic List</Text>
            </ListItem>
            <ListItem onPress={ this.onListDividerClick }>
              <Text >List Divider</Text>
            </ListItem>   
            <ListItem onPress={ this.onListHeaderClick }>
              <Text >List Header</Text>
            </ListItem>
            <ListItem onPress={ this.onListItemSelectedClick }>
              <Text >ListItem Selected</Text>
            </ListItem>   
            <ListItem onPress={ this.onListItemNoIndentClick }>
              <Text >ListItem NoIndent</Text>
            </ListItem>
            <ListItem onPress={ this.onListIconClick }>
              <Text >List Icon</Text>
            </ListItem>   
            <ListItem onPress={ this.onListAvatarClick }>
              <Text >List Avatar</Text>
            </ListItem>
            <ListItem onPress={ this.onListThumbnailClick }>
              <Text >List Thumbnail</Text>
            </ListItem>   
            <ListItem onPress={ this.onDynamicListClick }>
              <Text >Dynamic List</Text>
            </ListItem>
            <ListItem onPress={ this.onListSeparatorClick }>
              <Text >List Separator</Text>
            </ListItem>         
          </List>
        </Content>
      </Container>
    );
  }
}