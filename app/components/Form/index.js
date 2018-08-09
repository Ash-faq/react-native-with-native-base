import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onBasicFormClick = () =>{
        Actions.basicForm();
    }
    onFixedLabelClick = () =>{
        Actions.fixedLabel();
    }  
    onInlineLabelClick = () =>{
      Actions.inlineLabel();
    }
    onFloatingLabelClick = () =>{
        Actions.floatingLabel();
    }  
    onStackedLabelClick = () =>{
      Actions.stackedLabel();
    }  
    onPickerInputClick = () =>{
      Actions.pickerInput();
    }
    onRegularTextboxClick = () =>{
        Actions.regularTextbox();
    }  
    onUnderlinedTextboxClick = () =>{
      Actions.underlinedTextbox();
    }
    onRoundedTextboxClick = () =>{
      Actions.roundedTextbox();
    }  
    onIconTextboxClick = () =>{
      Actions.iconTextbox();
    }
    onSuccessInputTextboxClick = () =>{
      Actions.successInputTextbox();
    }  
    onErrorInputTextboxClick = () =>{
      Actions.errorInputTextbox();
    }
    onDisabledTextboxClick = () =>{
      Actions.disabledTextbox();
    }  
    onTextareaClick = () =>{
      Actions.textarea();
    }
  
  render() {
    return (
      <Container>        
        <Content>
          <List>
          <ListItem onPress={ this.onBasicFormClick }>
              <Text >Basic Form</Text>
            </ListItem>
            <ListItem onPress={ this.onFixedLabelClick }>
              <Text >Fixed Label</Text>
            </ListItem>    
            <ListItem onPress={ this.onInlineLabelClick }>
              <Text >Inline Label</Text>
            </ListItem>
            <ListItem onPress={ this.onFloatingLabelClick }>
              <Text >Floating Label</Text>
            </ListItem>  
            <ListItem onPress={ this.onStackedLabelClick }>
              <Text >Stacked Label</Text>
            </ListItem>
            <ListItem onPress={ this.onPickerInputClick }>
              <Text >Picker Input</Text>
            </ListItem>  
            <ListItem onPress={ this.onRegularTextboxClick }>
              <Text >Regular Textbox</Text>
            </ListItem>
            <ListItem onPress={ this.onUnderlinedTextboxClick }>
              <Text >Underlined Textbox</Text>
            </ListItem>  
            <ListItem onPress={ this.onRoundedTextboxClick }>
              <Text >Rounded Textbox</Text>
            </ListItem>
            <ListItem onPress={ this.onIconTextboxClick }>
              <Text >Icon Textbox</Text>
            </ListItem>  
            <ListItem onPress={ this.onSuccessInputTextboxClick }>
              <Text >Success Input Textbox</Text>
            </ListItem>
            <ListItem onPress={ this.onErrorInputTextboxClick }>
              <Text >Error Input Textbox</Text>
            </ListItem>  
            <ListItem onPress={ this.onDisabledTextboxClick }>
              <Text >Disabled Textbox</Text>
            </ListItem>
            <ListItem onPress={ this.onTextareaClick }>
              <Text >Textarea</Text>
            </ListItem>       
          </List>
        </Content>
      </Container>
    );
  }
}