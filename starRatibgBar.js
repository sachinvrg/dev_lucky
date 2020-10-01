import { View } from "native-base";
// import React, { Component } from "react";
// import { View, Text } from "react-native";
// import { Rating, AirbnbRating } from 'react-native-ratings';

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <AirbnbRating
//           count={6}
//           reviews={["Terrible", "Bad","OK", "Good", "Very Good","Unbelievable"]}
//           defaultRating={0}
//           size={50}
//           selectedColor='green'
//           isDisabled={false}
//           starContainerStyle={{backgroundColor:'red',borderWidth:2}}
//         />
//         {/* <Rating
//           showRating
//           onFinishRating={this.ratingCompleted}
//           style={{ paddingVertical: 10 }}
//         /> */}
//       </View>
//     )
//   }
// }

import React, { Component } from "react";
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

let previous;

class StarRatingApp extends Component {

  constructor() {
    super();
    this.state = {
      starCount: .5,

    };
  }

  onStarRatingPress(rating) {
    
    this.setState({
           starCount: rating
         });
    
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: -150 }}>
        <StarRating
          disabled={false}
          emptyStar={'star-o'}
          fullStar={'star'}
          halfStar={'star-half-empty'}
          iconSet={'FontAwesome'}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => {this.onStarRatingPress(rating);
          previous=rating;}}
          fullStarColor={'black'}
          emptyStarColor='black'
          starSize={50}
          containerStyle={{ width: 50 }}
          halfStarEnabled={true}

        />
      </View>
    );
  }
}

export default StarRatingApp;