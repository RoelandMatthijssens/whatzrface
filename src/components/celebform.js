import React, { useState } from 'react'
import { Formik } from 'formik';
import { Form, Button, Alert } from 'react-bootstrap';
import { levenshteinDistance } from '../utils'
import * as Yup from 'yup';

const CelebForm = ({ person }) => {
    const gender = person.gender
    const validationSchema = Yup.object().shape({
        guess: Yup.string()
            .required("*Name is required"),
    });
    const [distance, setDistance] = useState(-1)
    const getMessage = (distance) => {
        if (distance < 0) {
            return
        } else if (distance === 0) {
            return <Alert variant="success">nice!</Alert>
        } else if (distance <= Math.ceil(person.name.length * 0.1)) {
            return <Alert variant="secondary"> eh, close enough!</Alert>
        } else {
            return <Alert variant="danger">Noob!</Alert>
        }
    }
    return (
        <div>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ guess: '' }}
                onSubmit={({ guess }, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    setDistance(levenshteinDistance(person.name.toLowerCase(), guess.toLowerCase()))
                    console.table(distance, guess, person.name, Math.ceil(person.name.length * 0.1))
                    setSubmitting(false);
                }}
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
                                    placeholder={`Whatz${gender === 'M' ? 'iz' : 'r'} Face?`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.guess}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button >
                        </Form>
                    )}
            </Formik>
            {getMessage(distance)}
        </div >
    )
}

export default CelebForm