import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onCardHeaderAndFooterClick = () =>{
        Actions.cardHeaderAndFooter();
    }
    onCardItemBorderedClick = () =>{
        Actions.cardItemBordered();
    }
    onCardItemButtonClick = () =>{
        Actions.cardItemButton();
    }
    onTransparentCardClick = () =>{
        Actions.roundedButton();
    }
    onCardListClick = () =>{
        Actions.outlinTransparentCardeButton();
    }
    onCardImageClick = () =>{
        Actions.cardImage();
    }
    onCardShowcaseClick = () =>{
        Actions.cardShowcase();
    }  

  render() {
    return (
      <Container>
        <Content>
          <List>
          <ListItem onPress={ this.onCardHeaderAndFooterClick }>
              <Text >Card Header and Footer</Text>
            </ListItem>
            <ListItem onPress={ this.onCardItemBorderedClick }>
              <Text >CardItem Bordered</Text>
            </ListItem>           
            <ListItem onPress={ this.onCardItemButtonClick }>
              <Text>CardItem Button</Text>
            </ListItem>
            <ListItem onPress={ this.onTransparentCardClick }>
              <Text>Transparent Card</Text>
            </ListItem>
            <ListItem onPress={ this.onCardListClick }>
              <Text>Card List</Text>
            </ListItem>
            <ListItem onPress={ this.onCardImageClick }>
              <Text>Card Image</Text>
            </ListItem>
            <ListItem onPress={ this.onCardShowcaseClick }>
              <Text>Card Showcase</Text>
            </ListItem>            
          </List>
        </Content>
      </Container>
    );
  }
}