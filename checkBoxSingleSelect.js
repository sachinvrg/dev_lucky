import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements'


class Check extends Component {

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


  render() {
    let { data, checked, selectedIndex, isSelected } = this.state;
    return (
      <FlatList
        data={data}
        renderItem={({ item, index }) =>
        
          <CheckBox
            
            title={item.name}
            onPress={() => {
              let selectedItem=item.name;
              console.log(selectedItem);
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
export default Check;