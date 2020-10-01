import React, { Component } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Button, Linking } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class NewsApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#4682B4'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30
          }
        }}>
          <Stack.Screen name="News" component={NewsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


class NewsScreen extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=1b91b58ed17f411b83f6c78e39557ea2')
      .then(resp => resp.json())
      .then(data => this.setState({ data: data.articles }))
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 5 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>

            <View style={{ flex: 1, margintop: 10, padding: 10 }}>
              <View style={{ padding: 10, backgroundColor: '#DCDCDCsss', borderRadius: 10, alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(item.url)}>
                  <Text style={{ fontSize: 22, fontWeight: 'bold', fontStyle: 'italic' }}>{item.title}</Text>
                </TouchableOpacity>

                <Image source={{ uri: item.urlToImage }} style={{ height: 300, width: 350 }} />
                {/* <Button title="More>>" color='#556B2F'
                  onPress={() =>
                    Linking.openURL(item.url)} /> */}

              </View>

            </View>

          }
        />
      </View>

    );
  }
}


