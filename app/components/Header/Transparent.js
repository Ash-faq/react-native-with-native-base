import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Body, Text } from "native-base";
export default class HeaderTransparent extends Component {
  render() {
    return (
      <Container style={{backgroundColor: "#87cefa"}}>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Transparent</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Text>
            Header with transparent prop
          </Text>
        </Content>
      </Container>
    );
  }
}