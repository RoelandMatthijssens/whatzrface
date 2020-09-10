import React from 'react'
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import styled from 'styled-components'


const CelebForm = ({ person }) => {
    const gender = person.gender
    const validationSchema = Yup.object().shape({
        celeb_name: Yup.string()
            .required("*Name is required"),
    });
    return (
        <div>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ celeb_name: '' }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
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
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Control
                                    type="text"
                                    name="celeb_name"
                                    placeholder={`Whatz${gender === 'M' ? 'iz' : 'r'} Face?`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.celeb_name}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button >
                        </Form>
                    )}
            </Formik>
        </div>
    )
}

export default CelebForm