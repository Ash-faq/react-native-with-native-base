import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './home';

import Accordion from './components/Accordion';
import CustomHeaderAndContent from './components/Accordion/CustomHeaderAndContent';
import HeaderAndContentStyle from './components/Accordion/HeaderAndContentStyle';
import IconAndExpandedIcon from './components/Accordion/IconAndExpandedIcon';
import IconAndExpandedIconStyle from './components/Accordion/IconAndExpandedIconStyle';

import Badge from './components/Badge/Badge';

import Button from './components/Button';
import BlockButton from './components/Button/BlockButton';
import ButtonSize from './components/Button/ButtonSize';
import ButtonTheme from './components/Button/ButtonTheme';
import DisabledButton from './components/Button/DisabledButton';
import FullButton from './components/Button/FullButton';
import IconButton from './components/Button/IconButton';
import OutlineButton from './components/Button/OutlineButton';
import RoundedButton from './components/Button/RoundedButton';
import TransparentButton from './components/Button/TransparentButton';

import Card from './components/Card';
import CardHeaderAndFooter from './components/Card/CardHeaderAndFooter';
import CardImage from './components/Card/CardImage';
import CardItemBordered from './components/Card/CardItemBordered';
import CardItemButton from './components/Card/CardItemButton';
import CardList from './components/Card/CardList';
import CardShowcase from './components/Card/CardShowcase';
import OutlinTransparentCardeButton from './components/Card/TransparentCard';

import CheckBox from './components/CheckBox/CheckBox';

import DatePicker from './components/DatePicker/DatePicker';

import DeckSwiper from './components/DeckSwiper';
import DeckSwiperBasic from './components/DeckSwiper/DeckSwiper';
import AdvancedDeckSwiper from './components/DeckSwiper/AdvancedDeckSwiper';

import FooterTabTypes from './components/FooterTab';
import FooterTab from './components/FooterTab/FooterTab';
import Footerbadge from './components/FooterTab/Footerbadge';
import IconFooter from './components/FooterTab/IconFooter';
import IconFooterText from './components/FooterTab/IconFooterText';

import Form from './components/Form';
import BasicForm from './components/Form/BasicForm';
import DisabledTextbox from './components/Form/DisabledTextbox';
import ErrorInputTextbox from './components/Form/ErrorInputTextbox';
import FixedLabel from './components/Form/FixedLabel';
import FloatingLabel from './components/Form/FloatingLabel';
import IconTextbox from './components/Form/IconTextbox';
import InlineLabel from './components/Form/InlineLabel';
import PickerInput from './components/Form/PickerInput';
import RegularTextbox from './components/Form/RegularTextbox';
import RoundedTextbox from './components/Form/RoundedTextbox';
import StackedLabel from './components/Form/StackedLabel';
import SuccessInputTextbox from './components/Form/SuccessInputTextbox';
import Textarea from './components/Form/Textarea';
import UnderlinedTextbox from './components/Form/UnderlinedTextbox';

import Header from './components/Header';
import HeaderIconButton from './components/Header/HeaderIconButton';
import IconButtonAndTextButton from './components/Header/IconButtonAndTextButton';
import MultipleIcon from './components/Header/MultipleIcon';
import NoLeft from './components/Header/NoLeft';
import NoShadow from './components/Header/NoShadow';
import Span from './components/Header/Span';
import TextButtons from './components/Header/TextButtons';
import HeaderTitle from './components/Header/Title';
import TitleAndSubtitle from './components/Header/TitleAndSubtitle';
import Transparent from './components/Header/Transparent';

import Icon from './components/Icon/Icon';


import Layout from './components/Layout/Layout';

import List from './components/List';
import BasicList from './components/List/List';
import DynamicList from './components/List/DynamicList';
import ListAvatar from './components/List/ListAvatar';
import ListDivider from './components/List/ListDivider';
import ListHeader from './components/List/ListHeader';
import ListIcon from './components/List/ListIcon';
import ListItemNoIndent from './components/List/ListItemNoIndent';
import ListItemSelected from './components/List/ListItemSelected';
import ListSeparator from './components/List/ListSeparator';
import ListThumbnail from './components/List/ListThumbnail';
  
import Picker from './components/Picker';
import BasicPicker from './components/Picker/Picker';
import PickerCustomBackButton from './components/Picker/PickerCustomBackButton';
import PickerCustomHeader from './components/Picker/PickerCustomHeader';
import PickerCustomHeaderStyle from './components/Picker/PickerCustomHeaderStyle';
import PickerIcon from './components/Picker/PickerIcon';
import PickerIconStyle from './components/Picker/PickerIconStyle';
import PlaceholderPicker from './components/Picker/PlaceholderPicker';

import RadioButton from './components/RadioButton';
import BasicRadioButton from './components/RadioButton/RadioButton';
import CustomRadioButton from './components/RadioButton/CustomRadioButton';

import SearchBar from './components/SearchBar/SearchBar';

import Spinner from './components/Spinner/Spinner';

import Thumbnail from './components/Thumbnail/Thumbnail';

import Typography from './components/Typography/Typography';

export default class Route extends Component {
    render(){
        return(
            <Router>
                <Stack key="root">
                   <Scene key="home" initial={true} component={Home} title="Native Base Components List"/>   
                  
                   <Scene key="accordion" component={Accordion} title="Accordion"/>                    
                   <Scene key="accordionIcon" component={CustomHeaderAndContent} title="AccordionIcon"/>  
                   <Scene key="accordionIconStyle" component={HeaderAndContentStyle} title="AccordionIconStyle"/> 
                   <Scene key="accordionHeaderContent" component={IconAndExpandedIcon} title="AccordionHeaderContent"/> 
                   <Scene key="accordionCustomHeaderContent" component={IconAndExpandedIconStyle} title="AccordionCustomHeaderContent"/>                  

                   <Scene key="badge" component={Badge} title="Badge"/> 

                   <Scene key="button" component={Button} title="Button"/>   
                   <Scene key="blockButton" component={BlockButton} title="BlockButton"/>  
                   <Scene key="buttonSize" component={ButtonSize} title="ButtonSize"/>  
                   <Scene key="buttonTheme" component={ButtonTheme} title="ButtonTheme"/>  
                   <Scene key="disabledButton" component={DisabledButton} title="DisabledButton"/>  
                   <Scene key="fullButton" component={FullButton} title="FullButton"/>  
                   <Scene key="iconButton" component={IconButton} title="IconButton"/>  
                   <Scene key="outlineButton" component={OutlineButton} title="OutlineButton"/>  
                   <Scene key="roundedButton" component={RoundedButton} title="RoundedButton"/>          
                   <Scene key="transparentButton" component={TransparentButton} title="TransparentButton"/> 

                   <Scene key="card" component={Card} title="Card"/>   
                   <Scene key="cardHeaderAndFooter" component={CardHeaderAndFooter} title="CardHeaderAndFooter"/>  
                   <Scene key="cardImage" component={CardImage} title="CardImage"/>  
                   <Scene key="cardItemBordered" component={CardItemBordered} title="CardItemBordered"/>  
                   <Scene key="cardItemButton" component={CardItemButton} title="CardItemButton"/>  
                   <Scene key="cardList" component={CardList} title="CardList"/>  
                   <Scene key="cardShowcase" component={CardShowcase} title="CardShowcase"/>  
                   <Scene key="outlinTransparentCardeButton" component={OutlinTransparentCardeButton} title="OutlinTransparentCardeButton"/>    
                   
                   <Scene key="checkBox" component={CheckBox} title="CheckBox"/>  

                   <Scene key="datePicker" component={DatePicker} title="DatePicker"/>  

                   <Scene key="deckSwiper" component={DeckSwiper} title="DeckSwiper"/>   
                   <Scene key="deckSwiperBasic" component={DeckSwiperBasic} title="DeckSwiperBasic"/>   
                   <Scene key="advancedDeckSwiper" component={AdvancedDeckSwiper} title="AdvancedDeckSwiper"/>  
                 
                   <Scene key="footerTabTypes" component={FooterTabTypes} title="FooterTabTypes"/>   
                   <Scene key="footerTab" component={FooterTab} title="FooterTab"/>  
                   <Scene key="footerbadge" component={Footerbadge} title="Footerbadge"/>   
                   <Scene key="iconFooter" component={IconFooter} title="IconFooter"/>   
                   <Scene key="iconFooterText" component={IconFooterText} title="IconFooterText"/>      

                   <Scene key="form" component={Form} title="Form"/>   
                   <Scene key="basicForm" component={BasicForm} title="BasicForm"/>  
                   <Scene key="disabledTextbox" component={DisabledTextbox} title="DisabledTextbox"/>   
                   <Scene key="errorInputTextbox" component={ErrorInputTextbox} title="ErrorInputTextbox"/>   
                   <Scene key="fixedLabel" component={FixedLabel} title="FixedLabel"/>                      
                   <Scene key="floatingLabel" component={FloatingLabel} title="FloatingLabel"/>   
                   <Scene key="iconTextbox" component={IconTextbox} title="IconTextbox"/>  
                   <Scene key="inlineLabel" component={InlineLabel} title="InlineLabel"/>   
                   <Scene key="pickerInput" component={PickerInput} title="PickerInput"/>   
                   <Scene key="regularTextbox" component={RegularTextbox} title="RegularTextbox"/>                      
                   <Scene key="roundedTextbox" component={RoundedTextbox} title="RoundedTextbox"/>   
                   <Scene key="stackedLabel" component={StackedLabel} title="StackedLabel"/>  
                   <Scene key="successInputTextbox" component={SuccessInputTextbox} title="SuccessInputTextbox"/>   
                   <Scene key="textarea" component={Textarea} title="Textarea"/>   
                   <Scene key="underlinedTextbox" component={UnderlinedTextbox} title="UnderlinedTextbox"/>

                   <Scene key="header" component={Header} title="Header"/>   
                   <Scene key="headerIconButton" component={HeaderIconButton} title="HeaderIconButton"/>  
                   <Scene key="iconButtonAndTextButton" component={IconButtonAndTextButton} title="IconButtonAndTextButton"/>   
                   <Scene key="multipleIcon" component={MultipleIcon} title="MultipleIcon"/>   
                   <Scene key="noLeft" component={NoLeft} title="NoLeft"/>                      
                   <Scene key="noShadow" component={NoShadow} title="NoShadow"/>   
                   <Scene key="span" component={Span} title="Span"/>  
                   <Scene key="textButtons" component={TextButtons} title="TextButtons"/>   
                   <Scene key="headerTitle" component={HeaderTitle} title="Title"/>   
                   <Scene key="titleAndSubtitle" component={TitleAndSubtitle} title="TitleAndSubtitle"/>                      
                   <Scene key="transparent" component={Transparent} title="Transparent"/>              

                   <Scene key="icon" component={Icon} title="Icon"/>   

                   <Scene key="layout" component={Layout} title="Layout"/>  

                   <Scene key="list" component={List} title="List"/>   
                   <Scene key="basicList" component={BasicList} title="BasicList"/>  
                   <Scene key="dynamicList" component={DynamicList} title="DynamicList"/>   
                   <Scene key="listAvatar" component={ListAvatar} title="ListAvatar"/>   
                   <Scene key="listDivider" component={ListDivider} title="ListDivider"/>                      
                   <Scene key="listHeader" component={ListHeader} title="ListHeader"/>   
                   <Scene key="listIcon" component={ListIcon} title="ListIcon"/>  
                   <Scene key="listItemNoIndent" component={ListItemNoIndent} title="ListItemNoIndent"/>   
                   <Scene key="listItemSelected" component={ListItemSelected} title="ListItemSelected"/>   
                   <Scene key="listSeparator" component={ListSeparator} title="ListSeparator"/>                      
                   <Scene key="listThumbnail" component={ListThumbnail} title="ListThumbnail"/> 

                   <Scene key="picker" component={Picker} title="Picker"/>   
                   <Scene key="basicPicker" component={BasicPicker} title="BasicPicker"/>  
                   <Scene key="pickerCustomBackButton" component={PickerCustomBackButton} title="PickerCustomBackButton"/>   
                   <Scene key="pickerCustomHeader" component={PickerCustomHeader} title="PickerCustomHeader"/>   
                   <Scene key="pickerCustomHeaderStyle" component={PickerCustomHeaderStyle} title="PickerCustomHeaderStyle"/>                      
                   <Scene key="pickerIcon" component={PickerIcon} title="PickerIcon"/>   
                   <Scene key="pickerIconStyle" component={PickerIconStyle} title="PickerIconStyle"/>  
                   <Scene key="placeholderPicker" component={PlaceholderPicker} title="PlaceholderPicker"/>   
                   
                   <Scene key="radioButton" component={RadioButton} title="RadioButton"/>   
                   <Scene key="basicRadioButton" component={BasicRadioButton} title="BasicRadioButton"/>  
                   <Scene key="customRadioButton" component={CustomRadioButton} title="CustomRadioButton"/>   

                   <Scene key="searchBar" component={SearchBar} title="SearchBar"/> 
                   
                   <Scene key="spinner" component={Spinner} title="Spinner"/>   

                   <Scene key="thumbnail" component={Thumbnail} title="Thumbnail"/>    

                   <Scene key="typography" component={Typography} title="Typography"/>  
                 
                </Stack>
            </Router>
        )
    }
}