import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { getPosts } from '../actions';

import PostList from '../PostList';

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    // TODO: fetch initial set of posts
  }

  render() {
    const loader = this.props.isLoading ?
      <ActivityIndicator size='large' /> : null;
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Roddit
          </Text>
          <Text style={styles.instructions}>
            A minimalist Reddit reader app
          </Text>
          <Text style={styles.instructions}>
            Built by Rod
          </Text>
        </View>
        <View>
          <Text>/r/Programming</Text>
          <PostList posts={this.props.posts}/>
        </View>
        {loader}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  category: state.category,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (category) => dispatch(getPosts(category))
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
