import React from 'react'
import PostsList from './PostsList'
import $ from 'jquery'

var ViewContainer = React.createClass({
  getInitialState: function() {
    return ({
      posts: null,
      searchText: null,
      categories: null
    })
  },
  componentWillMount: function() {
    this.getPostsFromServer()
  },
  getPostsFromServer: function() {
    var that = this
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done(function(data) {
      that.setState({posts: data})
    })
  },
  deleteHandler: function(id) {
    $.ajax({
      url: '/api/posts/' + id,
      method: 'DELETE'
    }).done(function(data) {
      console.log('deleted post with id: ' + id);
    })
    var newData = this.state.posts.filter(function(item) {
      return item._id !== id
    })
    this.setState({posts: newData})
  },
  filterPosts: function() {
    this.state.posts.filter(function(item) {
      return(
        item.text.indexOf(this.state.searchText) !== -1
      )
    })
  },
  render: function() {
    return (
      <div>
        {this.state.posts ? <PostsList posts={this.state.posts} deleteHandler={this.deleteHandler} /> : null}
      </div>
    )
  }
})

export default ViewContainer
