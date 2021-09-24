import React, { Fragment } from 'react';

const Login = ()=>{
    return (
        <Fragment>
            <form>
                <input type="text" placeholder="Titulo"/>
                <input type="text" placeholder="Contenido"/>
                <input type="submit" value="Crear Post" />
            </form>
        </Fragment>
    )
}

export default Login;