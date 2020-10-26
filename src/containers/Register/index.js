import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import { UserOutlined, LockOutlined,MailOutlined } from '@ant-design/icons';
import { Form,Button, Col, Input, Row, notification, InputNumber } from 'antd';
import { Typography } from 'antd';
import React, {useState, useEffect} from 'react';

const { Title } = Typography;
const Register = (props) => {
    const [datos, setDatos] = useState({
        name: '',
        lastname: '',
        age: '',
        email: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const router = useRouter();
    const goContainerLogin= () =>{
      router.push("/login");
    };
    const openNotificationRegister = () => {
        console.log(datos)
        notification.open({
          message: 'Notificación Registro',
          description:
            'Usted se ha registrado',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    return(
        <Row>
            <Col span={12} offset={6}>
                <Form >
                    <Form.Item><Title>REGISTRO</Title></Form.Item>
                    <Form.Item label="Nombre">
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} name="name" onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item label="Apellido">
                        <Input name="lastname" onChange={handleInputChange} />    
                    </Form.Item>
                    <Form.Item label="Edad">
                        <InputNumber min={1} max={100} defaultValue={1} name="age" onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item label="Correo Electrónico">
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} name="email" onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={openNotificationRegister} style={{width: "100%"}}>Registrar</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={goContainerLogin}>Ir a Login</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};
export default Register;