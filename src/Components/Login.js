import React, { Fragment } from 'react';

const Login = ()=>{
    return (
        <Fragment>
            <form>
                <input type="text" placeholder="usuario"/>
                <input type="text" placeholder="contraseña"/>
                <input type="submit" value="Login" />
            </form>
        </Fragment>
    )
}

export default Login;