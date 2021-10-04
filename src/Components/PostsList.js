import React from 'react';
import PostListChild from './PostListChild';
import { useSelector } from 'react-redux';

const PostsList = ( { Posts } )=>{ 
    const _reduxPosts = useSelector(store=>store.listPosts);
    const renderChilds = ()=>{
        return _reduxPosts.map(post=>{
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