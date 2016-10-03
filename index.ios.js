'use strict';

import React from 'react';
import { AppRegistry, ScrollView, View, Dimensions, Text } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scrollViewWidth = screenWidth * 0.8;
const cardWidth = scrollViewWidth * 0.84;
const paddingCard = scrollViewWidth * 0.02;
const scrollViewPadding = scrollViewWidth * 0.04;

const ScrollViewAlign = React.createClass({
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView
          contentContainerStyle={this.props.contentContainerStyle}
          style={{flex: 0, backgroundColor: '#BDBDBD', height: screenWidth * 0.5, width: scrollViewWidth, paddingHorizontal: scrollViewPadding + paddingCard}}
          snapToAlignment={'start'}
          contentOffset={{
            x: 0,
            y: 0,
          }}
          snapToInterval={cardWidth + scrollViewPadding}
          renderRow={this.renderRow}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <View style={{backgroundColor: '#F44336', width: cardWidth, marginHorizontal: paddingCard}}><Text>First Card</Text></View>
          <View style={{backgroundColor: '#9C27B0', width: cardWidth, marginHorizontal:paddingCard}}><Text>Second Card</Text></View>
          <View style={{backgroundColor: '#E91E63', width: cardWidth, marginHorizontal:paddingCard}}><Text>Third Card</Text></View>
          <View style={{backgroundColor: '#FF5722', width: cardWidth, marginHorizontal:paddingCard}}><Text>Third Card</Text></View>
          <View style={{backgroundColor: '#00E676', width: cardWidth, marginHorizontal:paddingCard}}><Text>Third Card</Text></View>
          <View style={{backgroundColor: '#00B0FF', width: cardWidth, marginHorizontal:paddingCard}}><Text>Third Card</Text></View>
          <View style={{backgroundColor: '#1A237E', width: cardWidth, marginHorizontal: paddingCard}}><Text>Third Card</Text></View>
        </ScrollView>
      </View>
    );
  }
});

AppRegistry.registerComponent('ScrollViewAlign', () => ScrollViewAlign);
