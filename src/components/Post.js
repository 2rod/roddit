import React, { Component } from 'react';
import moment from 'moment';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Post extends Component<{}> {

  _calcDate = (timestamp) => {
    const date = new Date(timestamp*1000);
    const dateMoment = moment(date);
    return moment([dateMoment.year(),dateMoment.month(),dateMoment.date()]).fromNow();
  };

  render() {
    const post = this.props.post.data;
    const thumb = post.thumbnail ?
      <Image style={styles.thumbnail} source={{ uri: post.thumbnail }}/>
      : null;
    const submitted = this._calcDate(post.created_utc);
    return (
      <View style={styles.rowContainer}>
        {thumb}
        <View style={styles.colContainer}>
          <View>
            <Text style={styles.dateText}>Submitted {submitted}</Text>
          </View>
          <View>
            <Text style={styles.postTitle}>{post.title}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.statsText}>by {post.author}</Text>
            <Text style={styles.statsText}>Score: {post.score}</Text>
            <Text style={styles.statsText}>{post.num_comments} comments</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postText: {
    flex: 1
  },
  postTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10
  },
  dateText: {
    textAlign: 'right',
    fontSize: 10
  },
  statsText: {
    fontSize: 10,
    flex: 0.33
  },
  thumbnail: {
    width: 20,
    height: 20
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    flex: 1
  },
  colContainer: {
    flexDirection: 'column',
    padding: 10,
    flex: 1
  },
});
