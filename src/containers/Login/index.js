import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
import { Row, Col } from 'antd';
import {useRouter} from 'next/router';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';

const { Title } = Typography;
const Login = () => {
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const router = useRouter();
  
    const openNotificationLogin = () => {
        console.log(datos)
        notification.open({
        message: 'Notificación Login',
        description:
            'Usted ha iniciado sesión',
        onClick: () => {
            console.log('Notification Clicked!');
        },
        });
    };
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
