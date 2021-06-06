import React, { Component } from "react";
import AuthContext from "../../auth/auth-context";
import PostService from "../services/posts.service";

//create authContext from React
const PostContext = React.createContext();

export class PostProvider extends Component {
  // data shared
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
    };
  }

  // onrefreach the pages i think yeah here i will initialize again the user's infos 
  componentDidMount() {
    PostService.getAllByLevel(this.context.currentUser?.niveau)
    .then(response=>{
        this.setState({posts:response.data.content})
    })
  }

  render() {
    
    const {posts} = this.state;
    return (
        
      <PostContext.Provider
        value={{
            posts
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

PostProvider.contextType=AuthContext;

export default PostContext;
