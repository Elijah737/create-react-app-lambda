import React, { Component } from 'react';
import Post from "./posts/Post"
import Post2 from "./posts/Post2"

class Page extends Component {
    // state = {  }
    render() { 
        return ( <div className="page"> 

            <h1 className="blogHead">DEV Journal</h1>

            <Post/>

            <Post2/>

            </div>);
    }
}
 
export default Page;