import React, {Component} from 'react';
import axios from "axios";
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        seletedPostId: null
    };

    componentDidMount(){
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
                console.log("<--->"+ this.state.posts)
                console.log(response)
            });
    }


    postSelectedHandler = (id) => {
        this.setState({seletedPostId: id})
    };


    render(){

        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>
        if(!this.state.error)
        {
            posts = this.state.posts.map(p => {p.title})
            console.log("--->"+ posts)
        }

        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }

}

export default Posts;