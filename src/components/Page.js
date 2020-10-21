import React, { Component } from 'react';
import Post from "./posts/Post"
import Post2 from "./posts/Post2"

class Page extends Component {
    // state = {  }
    render() { 
        return ( <div className="page"> 

            <Post/>

            <Post2/>

            </div>);
    }
}
 
export default Page;