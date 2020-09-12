
import React, { useState } from 'react'
import { BasicLayout } from '../components/layout'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import { SparqlClient } from '../utils';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AboutPage = () => {
    const client = new SparqlClient()
    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')
    const [actors, setActors] = useState({})
    const onClick = ({ name }, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        setMessage('')
        client.getDetailsForActor(name)
            .then((actor) => {
                if (actor) {
                    setImage(actor.image)
                } else {
                    setMessage("actor not found")
                }

                setSubmitting(false)
                resetForm()
            })
        client.getRelatedActors(name)
            .then(setActors)

    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("*Name is required"),
    });
    return (
        <BasicLayout>
            <Row>
                <Col>
                    <Image src={image} fluid />
                </Col>
                <Col>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{ name: '' }}
                        onSubmit={onClick}
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
                                            placeholder={"name"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.guess}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                                        Submit
                                    </Button >
                                    {message ? <Alert variant="warning">{message}</Alert> : ''}
                                </Form>
                            )}
                    </Formik>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        {
                            Object.values(actors).map((actor) => {
                                return (
                                    <li key={actor.actorLabel}>
                                        {actor.actorLabel}
                                        <ul>
                                            {
                                                actor.movies.map((movie) => {
                                                    return (
                                                        <li key={movie.movieLabel}>
                                                            {movie.movieLabel}
                                                        </li>

                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </BasicLayout >
    )
}


export default AboutPage