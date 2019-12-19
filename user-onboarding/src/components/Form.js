import React, { useState, useEffect} from "react";
import {
    withFormik,
    Form, 
    Field
} from "formik";
import * as Yup from "yup";
import axios from "axios";


const MyFormik = ({
    values,
    errors, 
    touched,
    status
}) => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        console.log("status has changed!", status);

        status && 
            setMember(member => [
                ...member,
                status
            ]);
    }, [status]);
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
            {touched.TermsOfService && errors.TermsOfService && (
                <p>{errors.TermsOfService}</p>
            )}
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
        password: Yup.string().required(),
        TermsOfService: Yup.boolean().oneOf([true], "You must agree to the Terms of Service")
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log("submitting", values);
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                console.log("successful post", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(MyFormik);

export default FormikForm