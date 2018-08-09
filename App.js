import React from "react";
import Start from "./app/index";
import { Font, AppLoading } from 'expo'; //Need to comment the EXPO while generating the APK

export default class App extends React.Component {
  constructor() {
        super();
        this.state = {
            isReady: false,
            status: false
        };
    }
    componentWillMount() {
       this.loadFonts();
    }
    
    async loadFonts() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
            FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf"),
            Entypo: require("@expo/vector-icons/fonts/Entypo.ttf"),
            MaterialIcons: require("@expo/vector-icons/fonts/MaterialIcons.ttf")
      });
       this.setState({ isReady: true });
    }
  render() {
     if (!this.state.isReady) {
            return <AppLoading />;
        }
    return <Start />;
  }
}

