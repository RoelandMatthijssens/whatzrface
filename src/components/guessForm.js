import React, { useState } from 'react'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const GuessForm = ({ currentActor, makeGuess, message, guessCount, guessResult }) => {
    const validationSchema = Yup.object().shape({
        guess: Yup.string()
            .required("*Name is required"),
    });
    const getMessage = () => {
        if (guessResult === 'EXACT') {
            return <Alert variant='success'> Gottem! Nice!</Alert>
        } else if (guessResult === 'CLOSE_ENOUGH') {
            return <Alert variant='secondary'> eh, close enough! it was {currentActor.actorLabel}</Alert>
        } else if (guessResult === 'PARTIAL') {
            return <Alert variant='warning'> We are looking for the full name!</Alert>
        } else if (guessResult === 'CLOSE') {
            return <Alert variant='warning'> close, but not quite!</Alert>
        } else if (guessResult === 'WRONG') {
            return <Alert variant='danger'> Not even close!</Alert>
        } else {
            return ''
        }
    }
    console.log(currentActor.actorLabel)
    return (
        <Row>
            <Col>
                <Image src={currentActor.image} fluid />
            </Col>
            <Col>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{ guess: '' }}
                    onSubmit={makeGuess}
                //     ({ guess }, { setSubmitting, resetForm }) => {
                //     setSubmitting(true)
                //     setDistance(levenshteinDistance(currentActor.actorLabel.toLowerCase(), guess.toLowerCase()))
                //     setSubmitting(false);
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
                                        name="guess"
                                        placeholder={`Whatz${currentActor.genderLabel === 'female' ? 'r' : 'iz'} Face?`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.guess}
                                    />
                                </Form.Group>
                                {getMessage()}
                                <Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button >
                            </Form>
                        )}
                </Formik>
            </Col>
        </Row>
    )
}

export default GuessForm