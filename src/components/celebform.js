import React from 'react'
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { levenshteinDistance } from '../utils'
import * as Yup from 'yup';

const CelebForm = ({ person }) => {
    const gender = person.gender
    const validationSchema = Yup.object().shape({
        guess: Yup.string()
            .required("*Name is required"),
    });
    return (
        <div>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ guess: '' }}
                onSubmit={({ guess }, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    const distance = levenshteinDistance(person.name.toLowerCase(), guess.toLowerCase())
                    console.table(distance, guess, person.name, Math.ceil(person.name.length * 0.1))
                    if (distance === 0) {
                        console.log('nice!')
                    } else if (distance <= Math.ceil(person.name.length * 0.1)) {
                        console.log('eh, close enough!')
                    } else {
                        console.log('Noob!')
                    }
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
        </div >
    )
}

export default CelebForm