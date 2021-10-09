import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const NavBar = ( { loggedIn } )=>{
    return (
        <Layout style = {{background: "rgba(255, 255, 255, 0.3)"} }>
        <Header  >
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
                {(loggedIn)
                    ? 
                    <Fragment>
                        <Menu.Item><Link to = "/About">Acerca de</Link></Menu.Item>
                        <Menu.Item><Link to = "/Posts">Posts</Link></Menu.Item>
                    </Fragment>    
                    :
                    <Fragment>
                        <Menu.Item ><Link to = "/Login">Login</Link></Menu.Item>
                        <Menu.Item><Link to = "/About">Acerca de</Link></Menu.Item>
                    </Fragment>
                }
            </Menu>
        </Header>
        </Layout>
    )
}

export default NavBar;