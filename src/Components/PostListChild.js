import React from 'react';
import { Card } from 'antd';
import { Divider } from 'antd';

const PostListChild = ()=>{
    return(
        <Card title="Nombre Usuario --- idPos" style={ { marginBottom:"20px" } }>
            Título del Post
            <Divider />
            Descripción del Post
        </Card>
    )
}

export default PostListChild;