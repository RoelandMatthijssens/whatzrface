import React, { useState } from 'react'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import { SparqlClient } from '../utils';
import { Formik } from 'formik';
import * as Yup from 'yup';
import dummyPerson from '../assets/images/people/dummyPerson.jpg'

const ContinueButton = ({ actor, handleClick }) => {
    if (actor) {
        return <Button variant="success" type="button" onClick={handleClick}>Start with {actor.genderLabel === 'female' ? "her" : "him"}!</Button >
    } else {
        return ''
    }
}

const ChooseStartActorForm = ({ chooseInitialActor }) => {
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
                {actor ?
                    <Image src={actor.image} fluid />
                    :

                    <Image src={dummyPerson} fluid />
                }
            </Col>
            <Col>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{ name: 'Natalie Dormer' }}
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
                                {message ? <Alert variant="warning">{message}</Alert> : ''}
                                <Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button >
                                <ContinueButton actor={actor} handleClick={continueWithActor} />
                            </Form>
                        )}
                </Formik>
            </Col>
        </Row>
    )
}

export default ChooseStartActorForm