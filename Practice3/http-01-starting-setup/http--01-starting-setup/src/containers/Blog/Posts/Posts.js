import React, {Component} from 'react';
import axios from "axios";
import Post from '../../../components/Post/Post';
import {Link, Route} from 'react-router-dom';
import './Posts.css';
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: [],
        seletedPostId: null
    };

    componentDidMount(){
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
            }).catch(error => {console.log(error)});
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/'+id);
    };

    render(){

        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>

        if(!this.state.error)
        {
            posts = this.state.posts.map(post => {
                return (<Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={()=> this.postSelectedHandler(post.id)}
                />)
            });
        }

        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url+'/:id'}  exact component={FullPost}/>
            </div>

        );
    }

}

export default Posts;