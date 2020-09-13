import React from 'react'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const GuessForm = ({ currentActor, makeGuess, next, guessCount, guessResult }) => {
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
    const getNextButton = (resetForm) => {
        const nextAndClear = () => {
            resetForm()
            next()
        }
        if (['EXACT', 'CLOSE_ENOUGH'].includes(guessResult)) {
            return <Button onClick={nextAndClear} variant="success" type="button">Next</Button >
        } else if (guessCount > 0) {
            return <Button onClick={nextAndClear} variant="danger" type="button">Skip</Button >
        } else {
            return ''
        }
    }
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
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        resetForm
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
                                {getNextButton(resetForm)}
                            </Form>
                        )}
                </Formik>
            </Col>
        </Row>
    )
}

export default GuessForm