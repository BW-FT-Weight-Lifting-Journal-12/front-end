import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const SignUp = props => {
  const [email, setEmail] = useState({
    email: ""
  });

  const [password, setPassword] = useState({
    password: ""
  });

  const emailHandleChange = event => {
    // console.log(event.target.value)
    // @ts-ignore
    setEmail({
      email: event.target.value
    });
  };

  const passwordHandleChange = event => {
    // console.log(event.target.value)
    // @ts-ignore
    setPassword({
      password: event.target.value
    });
  };

  const signUp = e => {
    e.preventDefault();
    setEmail(prev => ({
      ...prev,
      isFetching: true
    }));
    axiosWithAuth()
      .post("/login", email)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Navigation />
      <h1>Sign Up</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          // if (!values.password) {
          //   errors.password = "Required";
          // }
          // errors.password = "Invalid password";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-field" onSubmit={signUp}>
            <label htmlFor="email">Email: </label>
            <br />
            <Field
              className="field-input"
              id="email"
              type="email"
              name="email"
              value={email.email}
              onChange={emailHandleChange}
            />
            <br />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="email">Confirm Email: </label>
            <br />
            <Field
              className="field-input"
              id="email"
              type="email"
              name="email"
              value={email.email}
              onChange={emailHandleChange}
            />
            <br />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password: </label>
            <br />
            <Field
              className="field-input"
              id="password"
              type="password"
              name="password"
              value={password.password}
              onChange={passwordHandleChange}
            />
            <br />
            <ErrorMessage name="password" component="div" />
            <label htmlFor="password">Confirm Password: </label>
            <br />
            <Field
              className="field-input"
              id="password"
              type="password"
              name="password"
              value={password.password}
              onChange={passwordHandleChange}
            />
            <br />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
