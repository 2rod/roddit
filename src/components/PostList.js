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
      </TouchableOpacity>
    );
  }
}

export default class PostList extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    }
  }

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

  _renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    return (
      <FlatList
        data={this.props.posts}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
        onRefresh={this.props.onRefresh}
        refreshing={this.state.refreshing}
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
