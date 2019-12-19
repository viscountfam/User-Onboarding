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
        <div>
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
                <label htmlFor="role">
                    Role:
                </label>
                <Field 
                id="role"
                as="select"
                name="role"
                >
                 <option>
                     Select a Role
                     </option> 
                  <option value="Fullstack Web Developer">
                    Fullstack Web Developer
                  </option>
                  <option value="UX Designer">
                        UX Designer
                  </option>
                  <option value="Data Scientist">
                        Data Scientist
                  </option>
                  <option value="IOS Developer">
                        IOS Developer
                  </option>
                </Field>
                {touched.role && errors.role && (
                    <p>{errors.role}</p>
                )}
                <label htmlFor="birthday">
                    Birthday:
                </label>
                <Field
                id="birthday"
                type="date"
                name="birthday"
                />
                {touched.birthday && errors.birthday && (
                    <p>{errors.birthday}</p>
                )}
                <label htmlFor="state">
                    State:
                </label>
                <Field
                id="state"
                as="select"
                name="state"
                >
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </Field>
                {touched.state && errors.state && (
                    <p>{errors.state}</p>
                )}
                <label htmlFor="city">
                    City:
                </label>
                <Field
                id="city"
                type="text"
                name="city"
                />
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
            <h1>Users</h1>
            {member.map(member => {
                return (
                    <div key={member.id}>
                        <h2>
                            Name: {member.name}
                        </h2>
                        <h3>
                            Email: {member.email}
                        </h3>
                        <h4>
                            {member.role}
                        </h4>
                        <h4>
                            {member.state}
                            {member.city}
                        </h4>
                    </div>
                )
            })}
        </div>
    );
};

const FormikForm = withFormik ({
    mapPropsToValues({
        name,
        email,
        password,
        city
    }) {
        return {
            name: "",
            email: "",
            password: "",
            city: ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email("invalid Email").required(),
        password: Yup.string().required(),
        role: Yup.string().oneOf(["Fullstack Web Developer", "UX Designer", "Data Scientist", "IOS Developer"]).required("Please choose a role"),
        birthday: Yup.date().required("Please enter a date"),
        state: Yup.string().oneOf(["Al", "AK", "AX", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "NE", "NH", "NJ", "NM", "NV", "NY", "ND", "OH", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WI", "WV" ]).required("Select your state"),
        city: Yup.string().required("Enter your city"),
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