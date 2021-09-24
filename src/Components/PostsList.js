import React from 'react';
import PostListChild from './PostListChild';

const PostsList = ( { Posts } )=>{
    const renderChilds = ()=>{
        return Posts.map(post=>{
            return <PostListChild />
        })
    }
    return (
        <ul>
            { renderChilds() }
        </ul>
    )
}

export default PostsList;