//import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react'
import { View, Text,StyleSheet, Button} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

export default function App() {
  return (
    <AppContainer/>
  );
}


class HomeScreen extends React.Component {
  static navigationOptions={
    title: 'Home',
    headerStyle: {
      backgroundColor: 'pink',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
    <Text>{this.props.navigation.getParam('greet2')}</Text>
        <Button title="hello" onPress={()=>this.props.navigation.navigate('About',{greet:'Hey!'})}/>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
   static navigationOptions={
    headerStyle: {
      backgroundColor: 'pink',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>About Screen</Text>
    <Text>{this.props.navigation.getParam('greet')}</Text>
        <Button title="hello2" onPress={()=>this.props.navigation.navigate('Home',{greet2:'hey2!'})}/>

      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About:{
    screen: AboutScreen
  }
});

const AppContainer =createAppContainer(AppNavigator);

// export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
