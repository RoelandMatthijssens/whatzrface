import React from 'react'
import { sample } from '../utils'
import { BasicLayout } from '../components/layout'
import { Celeb, CelebForm } from '../components'
import { Col } from 'react-bootstrap';

const HomePage = ({ people }) => {
    const person = sample(people)
    return (
        <BasicLayout>
            <Col>
                <Celeb person={person} />
            </Col>
            <Col>
                <CelebForm person={person} />
            </Col>
        </BasicLayout>
    )
}


export default HomePage