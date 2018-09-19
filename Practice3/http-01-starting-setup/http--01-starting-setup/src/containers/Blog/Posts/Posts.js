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
        this.setState({seletedPostId: id})
    };

    render(){

        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>

        if(!this.state.error)
        {
            posts = this.state.posts.map(post => {
                return (<Link to={'/' + post.id} key={post.id}  >
                    <Post
                    title={post.title}
                    author={post.author}
                    clicked={()=> this.postSelectedHandler(post.id)}
                />
                </Link>)
            });
        }

        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url}"/posts/:id"  exact component={FullPost}/>
            </div>

        );
    }

}

export default Posts;