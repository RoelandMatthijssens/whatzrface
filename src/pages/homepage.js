import React, { useState } from 'react'
import { BasicLayout } from '../components/layout'
import { Celeb, CelebForm } from '../components'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import { SparqlClient } from '../utils';
import { Formik } from 'formik';
import * as Yup from 'yup';

function ContinueButton({ actor, handleClick }) {
    if (actor) {
        return <Button variant="success" type="button" onClick={handleClick}>Start with {actor.genderLabel === 'female' ? "her" : "him"}!</Button >
    } else {
        return ''
    }
}

function ChooseStartPersonForm({ chooseInitialActor }) {
    const client = new SparqlClient()
    const [message, setMessage] = useState(null)
    const [actor, setActor] = useState(null)
    const searchActor = ({ name }, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        setMessage('')
        client.getDetailsForActor(name)
            .then((actor) => {
                if (actor) {
                    setActor(actor)
                } else {
                    setMessage("actor not found")
                }
                setSubmitting(false)
                resetForm()
            })
    }
    const continueWithActor = () => {
        chooseInitialActor(actor)
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("*Name is required"),
    });

    return (
        <Row>
            <Col>
                {actor ? <Image src={actor.image} fluid /> : null}
            </Col>
            <Col>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{ name: '' }}
                    onSubmit={searchActor}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                            <Form onSubmit={handleSubmit} >
                                <Form.Group controlId="formName">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder={"Who do you want to start with?"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.guess}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button >
                                <ContinueButton actor={actor} handleClick={continueWithActor} />

                                {message ? <Alert variant="warning">{message}</Alert> : ''}
                            </Form>
                        )}
                </Formik>
            </Col>
        </Row>
    )
}


const HomePage = ({ currentActor, chooseInitialActor }) => {
    return (
        <BasicLayout>
            {
                currentActor
                    ?
                    <p>the current actor is {currentActor.actorLabel}</p>
                    :
                    <ChooseStartPersonForm chooseInitialActor={chooseInitialActor} />
            }
            {/* <Row>
                <Col>
                    <Celeb person={person} />
                </Col>
                <Col>
                    <CelebForm person={person} />
                </Col>
            </Row> */}
        </BasicLayout>
    )
}


export default HomePage