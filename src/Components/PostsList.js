import React from 'react';
import PostListChild from './PostListChild';

const PostList = ()=>{
    return (
        <ul>
            <PostListChild />
            <PostListChild />
            <PostListChild />
            <PostListChild />
        </ul>
    )
}

export default PostList;