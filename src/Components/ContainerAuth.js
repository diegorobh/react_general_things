import React from 'react';
import CreatePost from './CreatePost';
import './ContainerAuth.css'

const ContainerAuth = ()=>{
    return(
        <div className="_ContainerAuth">
            <div className="leftContainer">

            </div>
            <div className="rightContainer">
                <CreatePost />
            </div>
        </div>
    )
}

export default ContainerAuth;