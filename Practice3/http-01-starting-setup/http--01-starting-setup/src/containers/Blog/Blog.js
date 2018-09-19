import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch} from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav className="Blog">
                        <ul>
                            <li><NavLink to="/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/" component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;
