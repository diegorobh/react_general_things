import React, { Fragment } from 'react';
import { fetch_posts } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

const CreatePost = ()=>{
    const dispatch = useDispatch();
    const store = useSelector(store=>store);
    const _reduxPosts = useSelector(store=>store.listPosts);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("entra en handleSubmit");
        console.log("estos son los _reduxPosts",_reduxPosts);
        console.log("este es el store",store);
        dispatch(fetch_posts(store));
    };

    return (
        <Fragment>
            <form onSubmit = { handleSubmit }>
                <input type="text" placeholder="Titulo"/>
                <input type="text" placeholder="Contenido"/>
                <input type="submit" value="Crear Post" />
            </form>
        </Fragment>
    )
}

export default CreatePost;