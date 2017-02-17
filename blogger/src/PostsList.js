import React from 'react';
import {Link} from 'react-router'

function PostsList(props) {
  var posts = props.posts.map(function(item) {
    return <tr>
             <td>{item.name}</td>
             <td>{item.content}</td>
             <td><button onClick={(id) => props.deleteHandler(item._id)}>Delete</button></td>
             <td><Link to={'/editPost/' + item._id} >Edit Post</Link></td>
           </tr>;
  });
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Content</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {posts}
      </tbody>
    </table>
  )
}

export default PostsList;
