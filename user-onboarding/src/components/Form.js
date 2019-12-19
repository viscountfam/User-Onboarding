import React, { useState } from "react";
import {
    withFormik,
    Form, 
    Field
} from "formik";
import * as Yup from "yup";
import axios from "axios";


const myFormik = ({
    values,
    errors, 
    touched
}) => {
    return (
        <Form>
            <label htmlFor="name">
                Name:
            </label>
            <Field 
            id="name"
            type="text"
            name="name"
            />
            {touched.name &&
                errors.name && (
                    <p>
                        {errors.name}
                    </p>
                )}
            <label htmlFor="Email">
                Email:
            </label>
            <Field
            id="email"
            type="text"
            name="email"
            />
             {touched.email &&
                errors.email && (
                    <p>
                        {errors.email}
                    </p>
                )}
            <label htmlFor="Password">
                Password:
            </label>
            <Field
            id="password"
            type="text"
            name="password"
            />
             {touched.password &&
                errors.password && (
                    <p>
                        {errors.password}
                    </p>
                )}
            <Field
            id="TermsOfService"
            type="checkbox"
            name="TermsOfService"
            />
            <button type="submit">
                Submit
            </button>
        </Form>
    );
};

const FormikForm = withFormik ({
    mapPropsToValues({
        name,
        email,
        password
    }) {
        return {
            name: "",
            email: "",
            passowrd: ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required()
    }),
})(myFormik);

export default FormikForm