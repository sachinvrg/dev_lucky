import React, { Component } from "react";
import { View, Text } from "react-native";

const data=[
  {id:1,name:'chinu'},
  {id:2,name:'lucky'},
  {id:3,name:'chhotu'},
  {id:4,name:'swati'},
]

export default class ListwithoutFlatlistApp extends Component {
  render() {
    return (
      <View>
        {
          data.map((item)=><Text style={{fontSize:30}}>{item.name}</Text>)
        }
      </View>
    );
  }
}