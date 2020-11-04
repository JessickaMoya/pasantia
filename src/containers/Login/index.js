import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
import { Row, Col } from 'antd';
import {useRouter} from 'next/router';
import Link from 'next/link';
import React, {useState, useEffect, useReducer} from 'react';

const { Title } = Typography;
const initialState={
    email: '',
    password: '',
    societyId: 'fafc7359-0139-43d7-9d00-1828d90cc407'
  }
const mook=
{
    email: 'admin@test.com',
    password: 'Test1235',
    societyId: 'fafc7359-0139-43d7-9d00-1828d90cc407'
}
  function reducer(state, {field, value}){
    return {
      ...state,
      [field]: value
    }
  }

const Login = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const router = useRouter();

    
    
  
    const openNotificationLogin = () => {
         // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://dbcolegios.blockchainconsultora.com', requestOptions)
            .then(async response => {
                const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            // this.setState({ postId: data.id })
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

        console.log(state);
        notification.open({
        message: 'Notificación Login',
        description:
            'Usted ha iniciado sesión',
        onClick: () => {
            console.log('Notification Clicked!');
        },
        });
    };
    const handleInputChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
      }

    useEffect(() => {
        console.log(state);
        return () => {
            console.log("Se desmontó el componente login");
        }
    }, [])
    return (
        <Row>
            <Col span={12} offset={6}>
                <Form 
                
                style={{maxWidth: "400px",}}
                >
                <Form.Item><Title>LOGIN</Title></Form.Item>
                <Form.Item label="Email"
                    
                    rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese su email!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange={handleInputChange} name="email"/>
                </Form.Item>
                <Form.Item label="Contraseña"
                    
                    rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese su contraseña!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleInputChange} 
                    name="password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={openNotificationLogin} htmlType="submit" className="login-form-button" style={{width: "100%"}}>
                    Iniciar Sesión
                    </Button>
                    O 
                    <Link href="/registro">
                        <a>registrate ahora!</a>
                    </Link>
                </Form.Item>
                
                </Form>
            </Col>
        </Row>
    );
};
export default Login;
