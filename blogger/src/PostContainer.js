import React from 'react'
import PostForm from './PostForm'
import $ from 'jquery'

var PostContainer = React.createClass ({
  getInitialState: function() {
    return (
      {name: null, content: null}
    )
  },
  onChangeHandler: function(field, value) {
    var newData = {}
    newData[field] = value
    this.setState(newData)
  },
  onSubmit: function() {
    var that = this
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: this.state
    }).done(function(data) {
      console.log(data)
    })
  },
  render: function() {
    return (
      <div>
        <PostForm onChangeHandler={this.onChangeHandler} onSubmit={this.onSubmit} />
      </div>
    )
  }
})

export default PostContainer
