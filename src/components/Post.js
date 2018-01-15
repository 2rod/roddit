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
    const post = this.props.post.data;
    const thumb = post.thumbnail ?
      <Image style={styles.thumbnail} source={{ uri: post.thumbnail }}/>
      : null;
    return (
      <View style={styles.rowContainer}>
        {thumb}
        <Text style={styles.postText}>{post.created}</Text>
        <Text style={styles.postText}>{post.title}</Text>
        <View>
          <Text style={styles.postText}>{post.author}</Text>
          <Text style={styles.postText}>{post.score}</Text>
          <Text style={styles.postText}>{post.num_comments}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postText: {
    color: '#333333',
    fontSize: 12,
    flex: 1
  },
  thumbnail: {
    width: 20,
    height: 20
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});
