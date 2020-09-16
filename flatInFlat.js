import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

const FlatListData = [{
    country: 'Country Name',
    artists: [
        { artist: 'artistOne_name' },
        { artist: 'artistTwo_name' },
        { artist: 'artistThree_name' },
        { artist: 'artistFour_name' }
    ]
}];

export default class FlatinFlat extends Component {

    handleFlat = (data) => {
        return (<View>

            <FlatList
                data={data}
                renderItem={({ item }) =>

                    <View>
                        <Text>{item.country}</Text>
                        <FlatList
                            data={item.artists}
                            renderItem={({ item }) =>
                                <Text>{item.artist}</Text>
                            }
                        />
                    </View>
                }
            />
        </View>);
    }
    render() {
        return (this.handleFlat(FlatListData));
    }
}

