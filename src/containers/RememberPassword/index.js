import { Form, Input, Button, notification, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
import { Row, Col } from 'antd';
import {useRouter} from 'next/router';
import Link from 'next/link';
import React, {useState, useEffect, useReducer} from 'react';

const { Title } = Typography;

const initialState={
  email: '',
}
function reducer(state, {field, value}){
  return {
    ...state,
    [field]: value
  }
}

const RememberPassword = () => {
  const [state,dispatch] = useReducer(reducer,initialState);

    const openNotificationRemember = () => {
        console.log(state);
        notification.open({
          message: 'Notificación Recordar Contraseña',
          description:
            'Se ha enviado un link a su correo',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    const router = useRouter();
    const goContainerLogin= () =>{
      router.push("/login");
    };
    const handleInputChange = (e) => {
      dispatch({field: e.target.name, value: e.target.value})
    }
 
    useEffect(() => {
      console.log(state);
      return () => {
          console.log("Se desmontó el componente rememberpassword");
      }
    }, [])
    
    return (
        <Row>
            <Col span={12} offset={6}>
                <Form>
                    <Form.Item><Title>ENVIAR CORREO PARA CAMBIAR CONTRASEÑA</Title></Form.Item>
                    <Form.Item label="Correo Electrónico">
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} name="email" onChange={handleInputChange}/>
                    </Form.Item>
                    <Form.Item label="Select">
                     
                      {/* <Select
                        name="part_id"
                        value={option.find(item => item.value === part_id)}
                        onChange={this.changeHandler}
                        options={option}
                      /> */}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={openNotificationRemember} style={{width: "100%"}}>Enviar</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={goContainerLogin}>Regresar</Button>
                    </Form.Item>
              
                </Form>
            </Col>
        </Row>
    );
};
export default RememberPassword;