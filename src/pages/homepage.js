import React from 'react'
import { sample } from '../utils'
import { BasicLayout } from '../components/layout'
import { Celeb, CelebForm } from '../components'
import { Row, Col } from 'react-bootstrap';

const HomePage = ({ people }) => {
    const person = sample(people)
    return (
        <BasicLayout>
            <Row>
                <Col>
                    <Celeb person={person} />
                </Col>
                <Col>
                    <CelebForm person={person} />
                </Col>
            </Row>
        </BasicLayout>
    )
}


export default HomePage