import React, { Fragment } from 'react';
import { fetch_posts } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form, Button } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';

const CreatePost = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store);
    const _reduxPosts = useSelector(store => store.listPosts);
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(e)
        console.log("entra en handleSubmit");
        console.log("estos son los _reduxPosts", _reduxPosts);
        console.log("este es el store", store);
        dispatch(fetch_posts(store));
    };

    return (
        <Fragment>
            <Form onFinish={handleSubmit} style={{ paddingHorizontal: 20 }} >
                <Form.Item
                    name="Autor"
                    rules={[
                        {
                            required: false,
                            message: 'Please input the Autor',
                        },
                    ]}>
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Autor"
                    />
                </Form.Item>
                <Form.Item
                    name="Titulo"
                    rules={[
                        {
                            required: false,
                            message: 'Please input the Title',
                        },
                    ]}>
                    <Input
                        prefix={<EditOutlined className="site-form-item-icon" />}
                        placeholder="Titulo"
                    />
                </Form.Item>
                <Form.Item
                    name="Contenido"
                    rules={[
                        {
                            required: false,
                            message: 'Please input the Content',
                        },
                    ]}>
                    <Input.TextArea 
                        placeholder="Contenido"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="ghost" htmlType="submit" style={{ width: '100%', background: "cyan" }} >Crear Post</Button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

export default CreatePost;