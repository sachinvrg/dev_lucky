//import React, { Component } from 'react';
//import { StyleSheet, Text, View} from 'react-native';
//import Display from './displayLove'

/*class App extends Component{
  state={
    enterd:"enterd"
  };

  handle=()=>{
    Alert.alert("abe kya h be?");
  }

  render(){
    console.log(this.state);
    return ( <View style={styles.container}>
      <Text>{this.state.enterd}</Text>
      <TextInput style={{textAlign:'center'}} placeholder='enter here' onChangeText={(text)=>{this.setState({enterd:text})}}/>
      <Text style={{fontSize:30}}>Hello</Text>
      <Button title="click me" onPress={()=>Alert.alert("abe oye")}/>
    </View> );
  }
}*/


//image in native
/*
class App extends Component{
  
  render(){
    console.log(this.state);
    return ( <View style={styles.container}>
     
     <ScrollView>

       <Image source={{uri:"https://images.pexels.com/photos/153653/pexels-photo-153653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",width:500,height:500}}/>
       <Image source={{uri:"https://images.pexels.com/photos/153653/pexels-photo-153653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",width:500,height:500}}/>
       <Image source={{uri:"https://images.pexels.com/photos/153653/pexels-photo-153653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",width:500,height:500}}/>
       <Image source={{uri:"https://images.pexels.com/photos/153653/pexels-photo-153653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",width:500,height:500}}/>
       <Image source={{uri:"https://images.pexels.com/photos/153653/pexels-photo-153653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",width:500,height:500}}/>
     </ScrollView>
    </View> );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    fontSize:30,
    borderWidth:3,
    backgroundColor:'pink',
    padding:30,
    
  }
});*/


//fetch data from api
/*
export default class App extends Component{

  state={
    text:"hello"
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(data2=>{

    console.log(data2);
    this.setState({text:data2[0].name});

    })
  }
  render(){
    return ( <View style={styles.container}>
       
    <Text>Hello {this.state.text}</Text>

             </View> );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems:'center'

   
  }
});*/




//love percentage app

/*import { TextInput,Appbar,Button } from 'react-native-paper';

export default class App extends Component{

  state={
    fname:"",
    sname:"",
    percent:"",
    result:""
  }

  handle=()=>{ 

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
      headers:{
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "bad56c8bcfmsh29f38b0b1882970p1acaf7jsne6d30643df21"}
      })
    .then(data=>data.json())
    .then(data2=>{
      this.setState({percent:data2.percentage,result:data2.result});
    })
  }
  render(){
    return ( 
    
 <View  style={styles.container}>
      <Appbar.Header>
      <Appbar.Content  style={{alignItems:"center"}} title="Love % Calculator"/>
    </Appbar.Header>
                
<TextInput 
      label="person1"
      value={this.state.fname}
      onChangeText={text => this.setState({fname:text})}
    />

<TextInput
      label="person2"
      value={this.state.sname}
      onChangeText={text =>this.setState({sname:text})}
    />

<Button 
    mode="contained" style={{margin:20}} onPress={this.handle}>
    Calculate
  </Button>

  <Display percent={this.state.percent} result={this.state.result}/>
       
</View> )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue'

   
  }
});*/



// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue'
  }
});








