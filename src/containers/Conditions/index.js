import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
import { Row, Col, Divider  } from 'antd';
import {useRouter} from 'next/router';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';

const { Title } = Typography;
const { Paragraph } = Typography;
const Conditions = () => {
    return (
        <Row>
            <Col>
                <Title>TÉRMINOS Y CONDICIONES</Title>
                <Divider />
                <img src="/images/react.png" style={{width: "600px", height:"400px"}} />
                <Divider />
                <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit posuere dictum ligula nisi fringilla, 
                quam eros id ante erat elementum proin luctus tortor et consequat. Erat urna sociosqu convallis 
                etiam ut vitae dui congue facilisis, dapibus ligula luctus hendrerit tellus vehicula integer duis 
                , ac condimentum fames leo pulvinar sociis vulputate dictum. Varius mattis curae venenatis vulputate 
                vestibulum nunc consequat orci sed, odio blandit aliquet aptent vitae duis vehicula a.

                Aptent vehicula nascetur vitae egestas ultrices est, rutrum condimentum cursus himenaeos felis, hac 
                fringilla arcu facilisis fusce. Fermentum viverra hac egestas enim mi arcu, euismod vestibulum 
                venenatis pretium vulputate ad nisl, commodo senectus et gravida laoreet. Morbi vehicula conubia 
                facilisis nulla feugiat congue hac senectus vulputate litora, vestibulum euismod ullamcorper nullam 
                tellus gravida integer enim porta pharetra nunc, aliquam ligula tincidunt lacus porttitor sollicitudin 
                viverra felis montes.
                </Paragraph>
            </Col>
        </Row>
    );
};
export default Conditions;