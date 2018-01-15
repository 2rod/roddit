import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Post extends Component<{}> {
  render() {
    const post = this.props.post;
    return (
      <TouchableHighlight>
        <View>
          <Image/>
          <Text>{post.created}</Text>
          <Text>{post.title}</Text>
          <View>
            <Text>{post.author}</Text>
            <Text>{post.score}</Text>
            <Text>{post.num_comments}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
