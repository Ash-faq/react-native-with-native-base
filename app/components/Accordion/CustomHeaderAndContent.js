import React, { Component } from "react";
import { Container, Content, Accordion, View, Text } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionCustomHeaderContentExample extends Component {
  _renderHeader(title, expanded) {
    return (
      <View
        style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}
      >
        <Text style={{ fontWeight: "600" }}>
          {" "}{title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(content) {
    return (
      <Text
        style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}
      >
        {content}
      </Text>
    );
  }
  render() {
    return (
      <Container>      
        <Content padder>
          <Accordion
            dataArray={dataArray}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}