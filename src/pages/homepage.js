import React from 'react'
import { BasicLayout } from '../components/layout'
import { Celeb, CelebForm } from '../components'
import { Col } from 'react-bootstrap';

const HomePage = () => {
    return (
        <BasicLayout>
            <Col>
                <Celeb />
            </Col>
            <Col>
                <CelebForm gender="M" />
            </Col>
        </BasicLayout>
    )
}


export default HomePage