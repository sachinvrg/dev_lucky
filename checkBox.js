import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isSelected: false,
      selectedIndex: "",
      checked: [],
      data: [
        {
          name: "ALL",
        },
        {
          name: "Android",
        },
        {
          name: "iOS",
        },
        {
          name: "React Native",
        }
      ]
    }
  }

  componentWillMount() {
    let { data, checked } = this.state;
    let intialCheck = data.map(x => false);
    this.setState({ checked: intialCheck })
    
  }

  handleChange = (index) => {
    let { checked } = this.state;
    checked[index] = !checked[index];
    this.setState({ checked });
  }

  render() {
    let { data, checked, selectedIndex, isSelected } = this.state;
    return (
      <FlatList
        data={data}
        renderItem={({ item, index }) =>
        
          <CheckBox
            
            title={item.name}
            onPress={() => this.handleChange(index)}
            onPress={() => {
              index != selectedIndex || !isSelected ?
                this.setState({ selectedIndex: index, isSelected: true }) :
                this.setState({ isSelected: false });
            }}
            checked={index == selectedIndex && isSelected} />
        }
      />
    );
  }
}
export default App;

