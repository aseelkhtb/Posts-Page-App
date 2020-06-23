import React, { Component } from 'react';
import  './css/PostsStyle.css';
import getUser from './users';


let user=[]
      let post=[]
      let userid = 0;

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments:[],
            postC:[]
        };
      }
    componentDidMount() {
        const _post = this.props.location.state._post;
        const _user = this.props.location.state._user;
        debugger;
         userid = _post['post'].userId;
        user = _user['usr'];
        post = _post['post'];
        console.log(user);
        this.setState({
            postC:_post['post']
        })
        var path = 'http://jsonplaceholder.typicode.com/comments?postId='+_post['post'].id;
        fetch(path)
        .then(res => res.json())
        .then((data) => {
          this.setState({ comments: data })
        })
        .catch(console.log)
    }
    render(){
        return(

            <div className="col-xs-12">
                <h1 className="text-center App-header">Post Details</h1>
                <div className="card my-3 px-2 py-2 cardStyle">
                    <h2 className="card-title username">Name: {user.name}</h2>
                    <label className="email">E-mail: {user.email}</label>
                    <hr></hr>
                    <div className="card-body">
                        <h4 className="titleStyle mb-3 text-center">Title: {this.state.postC.title}</h4>            
                        <p>{this.state.postC.body}</p>
                        <div className="pt-5">
                        {this.state.comments.map((comment) => (
                            
                            <div>
                                
                        <hr></hr>
                                <h5 className="username">Name: {comment.name}</h5>
                                <label className="email">E-mail: {comment.email}</label>
                                <p>{comment.body}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Comments;