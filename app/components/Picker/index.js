import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onBasicPickerClick = () =>{
        Actions.basicPicker();
    }
    onPickerIconClick = () =>{
        Actions.pickerIcon();
    }  
    onPickerIconStyleClick = () =>{
      Actions.pickerIconStyle();
    }
    onPlaceholderPickerClick = () =>{
        Actions.placeholderPicker();
    }  
    onPickerCustomBackButtonClick = () =>{
      Actions.pickerCustomBackButton();
    }
    onPickerCustomHeaderClick = () =>{
        Actions.pickerCustomHeader();
    } 
    onPickerCustomHeaderStyleClick = () =>{
      Actions.pickerCustomHeaderStyle();
    }  

  render() {
    return (
      <Container>        
        <Content>
          <List>
          <ListItem onPress={ this.onBasicPickerClick }>
              <Text >Basic Picker</Text>
            </ListItem>
            <ListItem onPress={ this.onPickerIconClick }>
              <Text >Picker with Icon</Text>
            </ListItem>      
            <ListItem onPress={ this.onPickerIconStyleClick }>
              <Text >Picker with Icon Style</Text>
            </ListItem>
            <ListItem onPress={ this.onPlaceholderPickerClick }>
              <Text >Placeholder Picker</Text>
            </ListItem>      
            <ListItem onPress={ this.onPickerCustomBackButtonClick }>
              <Text >Picker with Custom Back Button</Text>
            </ListItem>         
            <ListItem onPress={ this.onPickerCustomHeaderClick }>
              <Text >Picker with Custom Header</Text>
            </ListItem>  
            <ListItem onPress={ this.onPickerCustomHeaderStyleClick }>
              <Text >Picker with Custom Header Style</Text>
            </ListItem>  
          </List>
        </Content>
      </Container>
    );
  }
}