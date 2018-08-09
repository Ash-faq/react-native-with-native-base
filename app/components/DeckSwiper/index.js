import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {

    onDeckSwiperClick = () =>{
        Actions.deckSwiperBasic();
    }
    onIconStyleClick = () =>{
        Actions.advancedDeckSwiper();
    }  

  render() {
    return (
      <Container>        
        <Content>
          <List>
          <ListItem onPress={ this.onDeckSwiperClick }>
              <Text >Deck Swiper</Text>
            </ListItem>
            <ListItem onPress={ this.onAdvancedDeckSwiperClick }>
              <Text >Advanced Deck Swiper</Text>
            </ListItem>         
          </List>
        </Content>
      </Container>
    );
  }
}