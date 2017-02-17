import React from 'react'

var PostForm = function(props) {
  return (
      <div>
        <form>
          <div className='form-group'>
            <label htmlFor='postName'>Name</label>
            <input type='text' placeholder='Name' id='postName' onChange={(event) => props.onChangeHandler('name', event.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='postContent'>Content</label>
            <input type='text' placeholder='Content' id='postContent' onChange={(event) => props.onChangeHandler('content', event.target.value)} />
          </div>
        </form>
        <button className='btn' onClick={() => props.onSubmit()}>Submit Post</button>
      </div>
    );
}

export default PostForm
