/*import React, { Component } from 'react'
import { View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple';

const fruits = [
    { name: 'lucky', id: 1 },
    { name: 'chinu', id: 2 },
    { name: 'chhotu', id: 3 },
    { name: 'swati', id: 4 },

];

const Fruits = [];
for (let i = 0; i < fruits.length; i++) {
    Fruits[i] = fruits[i].name;
    //console.log(Fruits);
}

class checkMultiple extends Component {
    state = { selectedFruits: [] }

    onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits });
        console.log(selectedFruits);
    }




    render() {
        return (
            <View>
                <SelectMultiple
                    items={Fruits}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />
            </View>
        )
    }
}
export default checkMultiple;*/



import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements'
const data = [
    { name: 'lucky', id: 1 },
    { name: 'chinu', id: 2 },
    { name: 'chhotu', id: 3 },
    { name: 'swati', id: 4 },

];

export default class CheckMultiple extends Component {

    constructor() {
        super();
        this.state = {
            checked: [],
            selected:[]
        }
    }

    handleChange = (index,checkedItem) => {
        let checked = [...this.state.checked];
        checked[index] = !checked[index];
        this.setState({ checked });
        if(checked[index]===true)
        {
        this.state.selected.push(checkedItem);
        console.log(this.state.selected);
        }
        else{
            this.state.selected.pop(checkedItem);
        console.log(this.state.selected);
        }
        
    }

    render() {
        let { checked } = this.state;
        return (
            <FlatList
                data={data}
                extraData={this.state}
                renderItem={({ item, index }) =>
                    <CheckBox
                        center
                        title={item.name}
                        onPress={() => checked[index] ? this.handleChange(index) : this.handleChange(index, item.name)}
                        checked={checked[index]} />
                }
            />
        );
    }
}