import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onTitleClick = () =>{
        Actions.headerTitle();
    }
    onTitleAndSubtitleClick = () =>{
        Actions.titleAndSubtitle();
    }  
    onIconButtonsClick = () =>{
      Actions.headerIconButton();
    }
    onTextButtonClick = () =>{
        Actions.textButtons();
    }  
    onIconButtonAndTextButtonClick = () =>{
      Actions.iconButtonAndTextButton();
    }  
    onMultipleIconButtonClick = () =>{
      Actions.multipleIcon();
    }
    onSpanClick = () =>{
      Actions.span();
    }  
    onNoShadowClick = () =>{
      Actions.noShadow();
    }
    onNoLeftClick = () =>{
      Actions.noLeft();
    }  
    onTransparentClick = () =>{
      Actions.transparent();
    }  



  render() {
    return (
      <Container>        
        <Content>
          <List>
          <ListItem onPress={ this.onTitleClick }>
              <Text >Header with only title</Text>
            </ListItem>
            <ListItem onPress={ this.onTitleAndSubtitleClick }>
              <Text >Header with Title and Subtitle</Text>
            </ListItem> 
            <ListItem onPress={ this.onIconButtonsClick }>
              <Text >Header with Icon Buttons</Text>
            </ListItem>
            <ListItem onPress={ this.onTextButtonClick }>
              <Text >Header with Text Buttons</Text>
            </ListItem> 
            <ListItem onPress={ this.onIconButtonAndTextButtonClick }>
              <Text >Header with Icon Button and Text Button</Text>
            </ListItem>          
            <ListItem onPress={ this.onMultipleIconButtonClick }>
              <Text >Header with Multiple Icon Buttons</Text>
            </ListItem>
            <ListItem onPress={ this.onSpanClick }>
              <Text >Header Span</Text>
            </ListItem>  
            <ListItem onPress={ this.onNoShadowClick }>
              <Text >Header NoShadow</Text>
            </ListItem>
            <ListItem onPress={ this.onNoLeftClick }>
              <Text >Header NoLeft</Text>
            </ListItem>  
            <ListItem onPress={ this.onTransparentClick }>
              <Text >Header Transparent</Text>
            </ListItem>         
          </List>
        </Content>
      </Container>
    );
  }
}