import React from 'react';
import PostListChild from './PostListChild';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const PostsList = ( { Posts } )=>{ 
    const _reduxPosts = useSelector(store=>store.listPosts);
    const renderChilds = ()=>{
        return _reduxPosts.map(post=>{
            return <PostListChild />
        })
    }
    return (
        <Card style={{padding:"10px"}}>
            { renderChilds() }
        </Card>
    )
}

export default PostsList;