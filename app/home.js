import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ListExample extends Component {
  
    onAccordionClick = () =>{
        Actions.accordion();
    }   
    onBadgeClick = () =>{
        Actions.badge();
    }
    onButtonClick = () =>{
        Actions.button();
    }
    onCardClick = () =>{
        Actions.card();
    }
    onCheckBoxClick = () =>{
        Actions.checkBox();
    }
    onDatePickerClick = () =>{
        Actions.datePicker();
    }
    onDeckSwiperClick = () =>{
        Actions.deckSwiper();
    }   
    onFooterTabClick = () =>{
        Actions.footerTabTypes();
    }
    onFormClick = () =>{
        Actions.form();
    }   
    onHeaderClick = () =>{
        Actions.header();
    }
    onIconClick = () =>{
        Actions.icon();
    }
    onLayoutClick = () =>{
        Actions.layout();
    }
    onListClick = () =>{
        Actions.list();
    }
    onPickerClick = () =>{
        Actions.picker();
    }
    onRadioButtonClick = () =>{
        Actions.radioButton();
    }
    onSearchBarClick = () =>{
        Actions.searchBar();
    }  
    onSpinnerClick = () =>{
        Actions.spinner();
    }
    onThumbnailClick = () =>{
        Actions.thumbnail();
    }
    onTypographyClick = () =>{
        Actions.typography();
    }
    

  render() {
    return (
      <Container>       
        <Content>
          <List>
          <ListItem onPress={ this.onAccordionClick }>
              <Text >Accordion</Text>
            </ListItem>    
            <ListItem onPress={ this.onBadgeClick }>
              <Text >Badge</Text>
            </ListItem> 
            <ListItem onPress={ this.onButtonClick }>
              <Text >Button</Text>
            </ListItem>    
            <ListItem onPress={ this.onCardClick }>
              <Text >Card</Text>
            </ListItem> 
            <ListItem onPress={ this.onCheckBoxClick }>
              <Text >Check Box</Text>
            </ListItem> 
            <ListItem onPress={ this.onDatePickerClick }>
              <Text >Date Picker</Text>
            </ListItem>   
            <ListItem onPress={ this.onDeckSwiperClick }>
              <Text >Deck Swiper</Text>
            </ListItem> 
            <ListItem onPress={ this.onFooterTabClick }>
              <Text >Footer Tab</Text>
            </ListItem>   
            <ListItem onPress={ this.onFormClick }>
              <Text >Form</Text>
            </ListItem>          
            <ListItem onPress={ this.onHeaderClick }>
              <Text >Header</Text>
            </ListItem>
            <ListItem onPress={ this.onIconClick }>
              <Text >Icon</Text>
            </ListItem>
            <ListItem onPress={ this.onLayoutClick }>
              <Text >Layout</Text>
            </ListItem>
            <ListItem onPress={ this.onListClick }>
              <Text >List</Text>
            </ListItem>
            <ListItem onPress={ this.onPickerClick }>
              <Text >Picker</Text>
            </ListItem>
            <ListItem onPress={ this.onRadioButtonClick }>
              <Text >Radio Button</Text>
            </ListItem>
            <ListItem onPress={ this.onSearchBarClick }>
              <Text >Search Bar</Text>
            </ListItem>           
            <ListItem onPress={ this.onSpinnerClick }>
              <Text >Spinner</Text>
            </ListItem>
            <ListItem onPress={ this.onThumbnailClick }>
              <Text >Thumbnail</Text>
            </ListItem>
            <ListItem onPress={ this.onTypographyClick }>
              <Text >Typography</Text>
            </ListItem>            
          </List>
        </Content>
      </Container>
    );
  }
}