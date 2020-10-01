import React, { Component } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";




export default class MasonaryViewApp extends Component {

  _renderItem = (item, index) => {

    if (index % 2) {


      return (
        <View style={{ flex: 1, padding: 5 }}>
          <Image source={{ uri: item }} style={{ flex: 1, height: 300, width: 200 }} />
        </View>
      )
    }

    else {
      return (
        <View style={{ flex: 2, padding: 5 }}>
          <Image source={{ uri: item }} style={{ flex: 2, height: 200, width: 200 }} />
        </View>
      )
    }
  }

  _renderItem2 = (item, index) => {

    if (!(index % 2)) {


      return (
        <View style={{ flex: 1, padding: 5 }}>
          <Image source={{ uri: item }} style={{ flex: 1, height: 300, width: 200 }} />
        </View>
      )
    }

    else {
      return (
        <View style={{ flex: 2, padding: 5 }}>
          <Image source={{ uri: item }} style={{ flex: 2, height: 200, width: 200 }} />
        </View>
      )
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row' }} >

          <View style={{ flex: 1 }}>

            <FlatList
              data={Data}
              scrollEnabled={false}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => this._renderItem(item.url, item.id)}

            />
          </View>

          <View style={{ flex: 1 }}>

            <FlatList
              data={Data}
              scrollEnabled={false}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => this._renderItem2(item.url, item.id)}

            />
          </View>


        </View>
      </ScrollView>
    );
  }
}


const Data = [
  { id: 1, url: 'https://sportshub.cbsistatic.com/i/r/2020/09/18/b855305c-5659-465d-8ffd-5aa8e40b2358/thumbnail/1200x675/a97d04d3daf45d03ed6e859ae7ecc934/aaron-rodgers-packers.jpg' },
  { id: 2, url: 'https://cdn.cnn.com/cnnnext/dam/assets/200430103423-02-brad-parscale-super-tease.jpg' },
  { id: 3, url: 'https://img.cinemablend.com/quill/c/9/1/5/b/2/c915b2c0dd36dec363e89081aef48452be6f850b.jpg' },
  { id: 4, url: 'https://media.npr.org/assets/img/2020/09/27/gettyimages-494078440_wide-a25a6a7a02e5e387dd93c91cb6fe320466166d0c.jpg?s=1400' },
  { id: 5, url: 'https://www.nj.com/resizer/2eDcwd8P6zAZwQMRhZ_4t7S9LGQ=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NAMADWG7OVGDPNSU2PM2TOY5QE.jpg' },
  { id: 6, url: 'https://sportshub.cbsistatic.com/i/r/2020/09/18/b855305c-5659-465d-8ffd-5aa8e40b2358/thumbnail/1200x675/a97d04d3daf45d03ed6e859ae7ecc934/aaron-rodgers-packers.jpg' },
  { id: 7, url: 'https://cdn.cnn.com/cnnnext/dam/assets/200430103423-02-brad-parscale-super-tease.jpg' },
  { id: 8, url: 'https://img.cinemablend.com/quill/c/9/1/5/b/2/c915b2c0dd36dec363e89081aef48452be6f850b.jpg' },
  { id: 9, url: 'https://media.npr.org/assets/img/2020/09/27/gettyimages-494078440_wide-a25a6a7a02e5e387dd93c91cb6fe320466166d0c.jpg?s=1400' },
  { id: 10, url: 'https://www.nj.com/resizer/2eDcwd8P6zAZwQMRhZ_4t7S9LGQ=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NAMADWG7OVGDPNSU2PM2TOY5QE.jpg' },
  { id: 11, url: 'https://sportshub.cbsistatic.com/i/r/2020/09/18/b855305c-5659-465d-8ffd-5aa8e40b2358/thumbnail/1200x675/a97d04d3daf45d03ed6e859ae7ecc934/aaron-rodgers-packers.jpg' },
  { id: 12, url: 'https://cdn.cnn.com/cnnnext/dam/assets/200430103423-02-brad-parscale-super-tease.jpg' },
  { id: 13, url: 'https://img.cinemablend.com/quill/c/9/1/5/b/2/c915b2c0dd36dec363e89081aef48452be6f850b.jpg' },
  { id: 14, url: 'https://media.npr.org/assets/img/2020/09/27/gettyimages-494078440_wide-a25a6a7a02e5e387dd93c91cb6fe320466166d0c.jpg?s=1400' },
  { id: 15, url: 'https://www.nj.com/resizer/2eDcwd8P6zAZwQMRhZ_4t7S9LGQ=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NAMADWG7OVGDPNSU2PM2TOY5QE.jpg' },
  { id: 16, url: 'https://sportshub.cbsistatic.com/i/r/2020/09/18/b855305c-5659-465d-8ffd-5aa8e40b2358/thumbnail/1200x675/a97d04d3daf45d03ed6e859ae7ecc934/aaron-rodgers-packers.jpg' },
  { id: 17, url: 'https://cdn.cnn.com/cnnnext/dam/assets/200430103423-02-brad-parscale-super-tease.jpg' },
  { id: 18, url: 'https://img.cinemablend.com/quill/c/9/1/5/b/2/c915b2c0dd36dec363e89081aef48452be6f850b.jpg' },
  { id: 19, url: 'https://media.npr.org/assets/img/2020/09/27/gettyimages-494078440_wide-a25a6a7a02e5e387dd93c91cb6fe320466166d0c.jpg?s=1400' },
  { id: 20, url: 'https://www.nj.com/resizer/2eDcwd8P6zAZwQMRhZ_4t7S9LGQ=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NAMADWG7OVGDPNSU2PM2TOY5QE.jpg' }
];
