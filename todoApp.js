import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { Button, Icon } from 'native-base';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class TodoApp extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'orange'
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}>
          <Stack.Screen name="ToDo App" component={TodoScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

let Tasks = [];

class TodoScreen extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      warn: ''

    }
  }


  addItem = () => {

    if (this.state.text == "") {
      this.setState({ warn: "Please Enter a Task" })
    }

    else {
      const tasks = firebase.database().ref("tasks")
      tasks.push().set({
        text: this.state.text
      })
      Tasks.push(this.state.text);
      console.log(Tasks);

      this.setState({ text: "" });
    }


  }

  removeItem = (item, index) => {
    Tasks.splice(index, 1);
    console.log(Tasks);

    this.setState({ text: "" });

  }



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#696969' }}>
        <View style={styles.container}>
          <View style={styles.textView}>
            <TextInput placeholder='Task To Do?' style={styles.textInput} onChangeText={(text) => {
              this.setState({
                text: text,
                warn: ''
              })
            }} />
            <Button success style={styles.addButton} onPress={() => this.addItem()}  >
              <Text style={styles.buttonText}  > Add </Text>
            </Button>
          </View>
          <Text style={{ margin: 10, marginLeft: 20, fontSize: 20, color: 'orange' }}>{this.state.warn}</Text>
        </View>
        <View style={styles.taskContainer} >
          <FlatList
            data={Tasks}
            renderItem={({ item, index }) =>
              <View style={styles.taskView}>
                <Text style={styles.taskText}>{item}</Text>
                <Button transparent light onPress={() => this.removeItem(item, index)}>
                  <Icon name='trash' style={{ color: 'red' }} />
                </Button>
              </View>
            }
          />

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  textInput: {
    borderWidth: 2,
    width: 300,
    borderRadius: 20,
    backgroundColor: '#FFFFE0'
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  addButton: {
    width: 70,
    height: 52,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'orange'
  },
  buttonText: {
    fontSize: 22

  },

  taskContainer: {
    marginTop: 30,
    padding: 20
  },

  taskView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    backgroundColor: '#DCDCDC'
  },
  taskText: {
    fontSize: 20,
    margin: 10
  }
})


