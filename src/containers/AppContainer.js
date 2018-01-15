import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { getPosts, setPosts } from '../actions';

import PostList from '../components/PostList';

class AppContainer extends Component<{}> {
  constructor(props) {
    super(props);
    // fetch initial set of posts
    this.fetchRedditPosts('new');
  }

  fetchRedditPosts (category) {
    fetch('https://api.reddit.com/r/programming/' + category)
    .then(response => response.json())
    .then(data => data.data.children)
    .then(posts => {
      this.props.setPosts(posts);
      console.log('posts', posts);
    });
  }

  render() {
    const loader = this.props.isLoading ?
      <ActivityIndicator size='large' /> : null;
    const postContent = this.props.posts ? <PostList posts={this.props.posts}/> : '';
    return (
      <View>
        <View>
          <Text style={styles.heading}>/r/Programming</Text>
        </View>
        <View style={styles.container}>
          {postContent}
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
  getPosts: (category) => dispatch(getPosts(category)),
  setPosts: (posts) => dispatch(setPosts(posts))
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
