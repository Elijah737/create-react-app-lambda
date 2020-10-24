import React from 'react';
import "./posts.css"

const Post = () => {
    return ( 
    <div className="post">

        <h1 className="postHead">Hello World</h1>
        <h6>10/20/20</h6>
        <p className="postText">this is some text which is words, WRODS THAT HAVE MEANINGS! <span><a href="https://www.google.com">GOOGLE</a></span></p>

    </div> );
}
 
export default Post;