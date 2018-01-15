import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking
} from 'react-native';

import Post from './Post';

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item.data.url);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Post post={this.props.item} />
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    );
  }
}

export default class PostList extends Component<{}> {

  _keyExtractor = (item, index) => item.data.id;

  _onPressItem = (url) => {
    Linking.openURL(url);
  };

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      onPressItem={this._onPressItem}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.posts}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#333'
  }
})
