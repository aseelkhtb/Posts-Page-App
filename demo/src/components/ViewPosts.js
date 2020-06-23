import React,{Component} from 'react';
import  './css/PostsStyle.css';
import getUser from '../components/users';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Comments from './ViewComments';

let usr = [];
class PostsView extends Component{ 
    state = {
        posts: []
      }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
          this.setState({ posts: data })
          console.log(this.state.posts)
        })
        .catch(console.log)
    }
    xx(id){
      usr = getUser(id);
      debugger;
      return usr.name
    }
    render() {
        return (
          <Router>
            <Route exact={true} path="/" render={() =>(
            <div className="col-xs-12">
                <h1 className="text-center App-header">Posts</h1>
                {this.state.posts.map((post) => (
                    <div className="card my-3 px-2 py-2 cardStyle" key={post.id}>
                    <h2 className="card-title username">Name: {  this.xx(post.userId)}</h2>
                    <label className="email">E-mail: { getUser(post.userId).email}</label>
                    <hr></hr>
                    <div className="card-body">
                        <h4 className="titleStyle mb-3 text-center">Title: {post.title}</h4>            
                <p>{post.body}</p>
                <Link className="float-right btn btn-primary" to={{
                  pathname:'/PostDetails',
                  state:{
                    _post: {post},
                    _user:{usr}
                  }
                }}>Read Comments</Link>
                
                    </div>
                </div>
                ))}
            </div>
            
            )}></Route>
            
            <Route component={Comments} path='/PostDetails' />
            </Router>
        );
      }

}
export default PostsView;