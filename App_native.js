

//styles in native

/*import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class App extends Component{

  constructor(){
    super();
    this.state={
      data:'chinu'
    }
  }

  render(){

return(
  <View style={styles.container}>
    <Text style={styles.title}>Hello {this.state.data}</Text>
    <Button title='click me' onPress={()=>{this.setState({data:'Lucky'})}}/>
  </View>
);
}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center'
  },

  title: {
    color: 'red',
    fontSize: 30,
    fontWeight: "bold",
    textAlign:'center'
  }
  
});

export default App;*/

//textInput in native

/*import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput} from "react-native";

class App extends Component{

  constructor(){
    super();
    this.state={
      data:'chinu'
    }
  }

  render(){

return(
  <View style={styles.container}>
    <Text style={styles.title}>helloooo {this.state.data}</Text>
    <TextInput style={{fontSize:30,height:100,width:300,textAlign:'center',backgroundColor:'pink'}} placeholder='Enter name' onChangeText={(e)=>{this.setState({data:e})}}></TextInput>
    <Button title='submit' onPress={()=>{alert(this.state.data)}}/>
  </View>
);
}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

  title: {
    color: 'red',
    fontSize: 30,
    fontWeight: "bold",
    textAlign:'center'
  }
  
});

export default App;*/


//form in react-native

/*import React,{Component} from 'react';
import {View,Text, TextInput,Button, StyleSheet, ClippingRectangle} from 'react-native';

class App extends Component{

  constructor(){

    super();

      this.state={
        name:'',
        password:'',
        city:''
      }
    }

    handle=()=>{

      console.warn(this.state);
    }

  render(){

  return( 

    <View>
      <TextInput style={styles.textBox} placeholder='Enter name' onChangeText={(text)=>{this.setState({name:text})}}></TextInput>
      <TextInput style={styles.textBox} placeholder='Enter password' onChangeText={(text)=>{this.setState({password:text})}}></TextInput>
      <TextInput style={styles.textBox} placeholder='Enter city' onChangeText={(text)=>{this.setState({city:text})}}></TextInput>
      <Button title='submit' onPress={this.handle}/>
    </View>
   );

  }
}
export default App;

const styles = StyleSheet.create({

  textBox:{
    borderWidth:2,
    borderColor:'blue',
    margin:20
  }
});*/

//flex

/*import React,{Component} from "react";
import {View,Text} from "react-native";

 export default class App extends Component{
  render(){

    return( 
    <View style={{flex:1,flexDirection:'row-reverse',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}> 

      <View style={{backgroundColor:'red',width:120,height:120}}></View>

      <View style={{backgroundColor:'yellow',width:120,height:120}}></View>

      <View style={{backgroundColor:'green',width:120,height:120}}></View>

    </View> 
    );
  }
}
*/


//Stack navigation

/*
import React from 'react';
import {View,Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator();

const App=()=>{

    return( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
     );
  };

  function HomeScreen({navigation}){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>HomeScreen</Text>
        <Button title="go to details" onPress={()=>navigation.navigate('Details')}/>

      </View>
    )
  }

  function DetailsScreen(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>DetailsScreen</Text>
      </View>
    )
  }

  export default App;*/

//params in stack navigation

/*import React from 'react';
import {View,Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator();

const App=()=>{

    return( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
     );
  };

  function HomeScreen({navigation}){

    let data={name:'lucky',address:'indore',email:'lucky007@gmail.com'}
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>HomeScreen</Text>
        <Button title="go to details" onPress={()=>navigation.push('Details',data)}/>

      </View>
    )
  }

  function DetailsScreen({route}){
    console.warn(route.params);
    let data=route.params;
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>DetailsScreen</Text>
        <Text style={{fontSize:30}}>{data.name}</Text>
        <Text style={{fontSize:30}}>{data.address}</Text>
        <Text style={{fontSize:30}}>{data.email}</Text>
      </View>
    )
  }

  export default App;
*/

//buttons withy event in header

/*
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen({ navigation }) {

  const [count, setCount] = useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
        <Button title="+count" onPress={()=>setCount(c=>c+1)}/>
        <Button title="-count" onPress={()=>setCount(c=>c-1)}/>
        </View>
      )
    })
  }, [navigation, setCount])

  let data = { name: 'lucky', address: 'indore', email: 'lucky007@gmail.com' }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>HomeScreen</Text>
      <Button title="go to details" onPress={() => navigation.push('Details', data)} />
      <Text style={{ fontSize: 30 }}>{count}</Text>

    </View>
  )
}

function DetailsScreen({ route }) {
  console.warn(route.params);
  let data = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>DetailsScreen</Text>
      <Text style={{ fontSize: 30 }}>{data.name}</Text>
      <Text style={{ fontSize: 30 }}>{data.address}</Text>
      <Text style={{ fontSize: 30 }}>{data.email}</Text>
    </View>
  )
}

export default App;*/


//set style to header,new title on click button and set params as title on click button

/*import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerStyle:{
          backgroundColor:"skyblue"
        },
        headerTintColor:'black',
        headerTitleStyle:{
          fontSize:25,
          fontWeight:'bold'
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}
        options={({route})=>({title:route.params.email})}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen({ navigation }) {

  let data = { name: 'lucky', address: 'indore', email: 'lucky007@gmail.com' }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>HomeScreen</Text>
      <Button title="go to details" onPress={() => navigation.push('Details', data)} />

    </View>
  )
}

function DetailsScreen({ route,navigation }) {
  console.warn(route.params);
  let data = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>DetailsScreen</Text>
      <Button title="update title" onPress={() => navigation.setOptions({title:'hello'})} />
    </View>
  )
}

export default App;*/

//tab navigation
/*
import React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function App(){
const Tab=createBottomTabNavigator();
  return ( 
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        tabStyle:{
          backgroundColor:'pink'
        },
        activeTintColor:'red'
      }}>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingScreen}></Tab.Screen>
        <Tab.Screen name="About" component={AboutScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
   )
}

function SettingScreen(){

  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>SettingScreen</Text>
    </View>
   )
}

function HomeScreen(){

  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>HomeScreen</Text>
    </View>
   )
}

function AboutScreen(){

  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>AboutScreen</Text>
    </View>
   )
}*/

//Drawer navigation
/*
import React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

export default function App(){
const Drawer=createDrawerNavigator();
  return ( 
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="Settings" component={SettingScreen}></Drawer.Screen>
        <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
   )
}

function SettingScreen(){

  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>SettingScreen</Text>
    </View>
   )
}

function HomeScreen(){

  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>HomeScreen</Text>
    </View>
   )
}

function AboutScreen(){

  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>AboutScreen</Text>
    </View>
   )
}*/


//ScrollView

/*import React from 'react';
import {View,Text,ScrollView} from 'react-native';

export default function App(){

  return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:100}}>Home Screen</Text>
    <ScrollView horizontal={false}>
      
      <View style={{backgroundColor:'red',height:200,width:200}}></View>
      <View style={{backgroundColor:'yellow',height:200,width:200}}></View>
      <View style={{backgroundColor:'green',height:200,width:200}}></View>
      <View style={{backgroundColor:'blue',height:200,width:200}}></View>
      <View style={{backgroundColor:'pink',height:200,width:200}}></View>
      <View style={{backgroundColor:'orange',height:200,width:200}}></View>
      
    </ScrollView>
    </View>
    
   )
}*/


//useState Hook
/*
import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

export default function App(){
 
  const [count,setCount]=useState(0);
  return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="+one" onPress={()=>setCount(count+1)}/>
      <Text style={{ fontSize:50}}>{count}</Text>
      <Button title="-one" onPress={()=>{setCount(count-1)}}/>
    </View>
    
   )
}*/

//lifeCycle method
/*
import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    //console.warn("constructor");
    this.state={
      data:""
    }
  }

  componentDidMount(){
   // console.warn("didmount");
   this.setState({data:"hello"});
  }
 
  render(){
    //console.warn("render");
  return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{this.state.data}</Text>
     
    </View>
    
   );
}
}*/


//FlatList
/*
import React,{Component} from 'react';
import {View,Text,Button,FlatList} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    
    this.state={
      data:[
        {name:"lucky",email:"lucky007"},
        {name:"Swati",email:"Swati007"},
        {name:"Chhotu",email:"Chhotu007"},
        {name:"Jehzz",email:"jehzz007"},
        {name:"Chhotu",email:"Chhotu007"},
        {name:"Jehzz",email:"jehzz007"}
      ]
    }
    
    }
  
  render(){
   
  return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:100}}>Hello</Text>
      <FlatList
      data={this.state.data}
      renderItem={({item})=><Text style={{fontSize:100}}>{item.name}</Text>}
      />
     
    </View>
    
   );
}
}*/

//Api call

/*
import React,{Component} from 'react';
import {View,Text,Button,FlatList} from 'react-native';


export default class App extends Component{
  constructor(){
    super();
    
    this.state={
      data:[]
    }
    
    }

    componentDidMount(){
      this.callApi();
    }

    async callApi(){
      let resp= await fetch('https://jsonplaceholder.typicode.com/users');
      let respJson= await resp.json();
      this.setState({data:respJson});

      //console.warn("respJson",respJson);
    }
  
  render(){
    console.warn("render",this.state.data);
  return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:100}}>Hello</Text>

      <FlatList 
      data={this.state.data}
  renderItem={({item})=><Text style={{fontSize:30,margin:10,backgroundColor:'pink'}}>{item.name},{item.address.city}</Text>}
      />
    </View>
    
   );
}
}*/


//form validation
/*import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      invalid: "",
      address: ""
    }
  }

  check = (e) => {

    let rjx = /^[a-zA-Z]+$/
    this.setState({ address: e })
    if (!rjx.test(e)) {
      this.setState({ invalid: "please enter valid address" });
    }
    else {
      this.setState({ invalid: "" });
    }
  }
  submit() {
    if (this.state.address.length < 1) {
      alert("empty address");
    }
  }
  render() {
    return (
      <View >
        <Text style={{ fontSize: 50 }}>Hello</Text>
        <TextInput maxLength={5} placeholder="Enter Name" style={{ borderWidth: 2, borderColor: 'skyblue', margin: 10 }}></TextInput>
        <TextInput keyboardType={'numeric'} placeholder="Enter Name" style={{ borderWidth: 2, borderColor: 'skyblue', margin: 10 }}></TextInput>
        <TextInput placeholder="Enter Name" style={{ borderWidth: 2, borderColor: 'skyblue', margin: 10 }} onChangeText={(e) => this.check(e)}></TextInput>
        <Text style={{ fontSize: 20, color: 'red' }}>{this.state.invalid}</Text>
        <Button title="Submit" onPress={() => { this.submit() }} />
      </View>
    )
  }
}*/

//Loader
/*
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      loader:true
    }
  }

  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({loader:false})
    },3000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.loader?
        <ActivityIndicator size={100} color='blue'/>:
        <Text style={{ fontSize: 50 }}>Hello</Text>
        }
      </View>
    )
  }
}*/

//UseEffect -is used to use the lifecycle methods(ex-componentDidMount) in function components.Runs at mount,state update and unmount.

/*import React,{useState,useEffect} from 'react';
import {View,Text,Button} from 'react-native';
import Home from './components/Home';

export default function App (){
  const [count,setCount]=useState(0);
  const [data,setData]=useState("no data");
  useEffect(()=>{
    console.warn('use effect',count);
    if(count==5){
      setData("data is filled up");
    }
  })
  return( 
  <View>
    <Text style={{fontSize:50}}>{count}</Text>
    <Button title="+one" onPress={()=>{setCount(count+1)}} />
    <Home data={data}/>
  </View> 
    )
}
*/


//modal(popup window)
import React, { Component } from 'react';
import { View, Text, Modal, Button } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 30 }}>
        <Text style={{ fontSize: 50 }}>Normal</Text>
        <Button title="show modal" onPress={() => { this.setState({ show: true }) }} />
        <Modal transparent={true} visible={this.state.show}>
          <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
            <View style={{ margin: 100, backgroundColor: '#ffffff', flex: 1, borderRadius: 10, padding: 50 }}>
              <Text style={{ fontSize: 35, marginTop: 100 }}>Modal</Text>
              <Button title="hide modal" onPress={() => { this.setState({ show: false }) }} />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
