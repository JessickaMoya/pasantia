import Ract from 'react';
import {useRouter} from 'next/router';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Wrapper = ({children}) => {
    const router = useRouter();
    const goContainerLogin= () =>{
      router.push("/login");
    };
    const goContainerRegister= () =>{
      router.push("/registro");
    };
    const goContainerConditions= () =>{
      router.push("/terminos-condiciones");
    };
    return(
        <>
         <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1" onClick={goContainerLogin}>Login</Menu.Item>
                <Menu.Item key="2" onClick={goContainerRegister}>Registrarse</Menu.Item>
                <Menu.Item key="3" onClick={goContainerConditions}>Términos y Condiciones</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Pasantía Frontend 2020</Footer>
        </Layout>,
       
        </>
    )
}

export default Wrapper